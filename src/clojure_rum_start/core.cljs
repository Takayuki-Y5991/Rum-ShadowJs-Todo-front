(ns clojure-rum-start.core
  (:require [clojure.string :as str]
            [rum.core :as rum]))

; TODO DELETE
(defn create-date []
  (str (.getFullYear (js/Date.)) "-" (.getMonth (js/Date.)) "-" (.getDate(js/Date.))))
; TODO CARD


( defonce todos ( atom nil))


(defn format-date [date-str]
  (if-let [date-str date-str]
    (let [date (js/Date. date-str)]
      (if-not (js/isNaN date)
        (str (.. date (getFullYear))
             "-"
             (-> date (.getMonth) inc str)
             "-"
             (-> date (.getDate) str))
        "invalid date"))
    ""))



(defn create-todo [todo]
  (let [url "http://localhost:3000/todo"
        options {:mode "cors"
                 :method 'POST'
                 :body (js/JSON.stringify todo)
                 :headers {"Content-Type" "application/json"}}]
    (-> (js/fetch url options)
        (.then #(when (not= 204 (.status %))
                  (throw (js/Error. "Failed to create todo")))))))

(defn update-status [todo id]
  (let [url (str "http://localhost:3000/todo/changeStatus/" id)
        options {
                 :mode "cors"
                 :method 'PATCH'
                 :body (js/JSON.stringify todo)
                 :headers {"Content-Type" "application/json"}
        }]
    (-> (js/fetch url options)
        (.then #(when (not= 200 (.status %))
                  (throw (js/Error. "Failed to update status todo")))))))

(defn delete [id]
  (let [url (str "http://localhost:3000/todo/" id)
        options {:mode "cors"
                 :method 'DELETE'
                 :headers {"Content-Type" "application/json"}
                 }]
    (-> (js/fetch url options)
        (.then #(when (not= 204 (.status %))
                  (throw (js/Error. "Failed to Delete todo")))))))
  

(defn remove-todo [todos todo-id]
  (filter #(not= (:id %) todo-id) todos))

(rum/defc todo-item [todo]
  (let [[completed-status is-completed-status!](rum/use-state (:completed todo))
        todo-id (:id todo)]
    [:li.card {:key todo-id :style {:color (if completed-status "green" "red")}}
      [:h3.todo-content (:title todo)]
      [:div.todo-limit "期限 : " (:limit_date todo)]
      [:div.update-button
       [:input {:type :button
                :value (if completed-status "完了" "未完了")
                :on-click #(update-status {:status (not completed-status)} todo-id)}]
        ; #(is-completed-status! (not completed-status))
       [:input {:type :button
                :value "削除"
                :on-click #(delete todo-id)}]
      ;  #(swap! todos remove-todo todo-id)
      ]
    ]
  )
)

(rum/defc todo-form [] 
  (let [[task set-task!] (rum/use-state "")
        [limit set-limit!] (rum/use-state (create-date))]
    [:div.add-content
     [:h3 "ADD TODO"]
     [:form
      [:span {:style {:margin "0 20px"}} "TODO名: "]
      [:input {:type :text
               :value task
               :placeholder "Add a new item"
               :on-change #(set-task! (.. % -target -value))}]
      [:span {:style {:margin "0 20px"}} "期限 :"]
      [:input {:type :date
               :value limit
               :on-change #(set-limit! (.. % -target -value))}]
      [:input {:type :submit
               :value "登録"
               :style {:margin "0 20px"}
               :on-click (fn [e]
                           (.preventDefault e)
                           (let [new-todo {
                                           :title task 
                                           :limit_date limit}]
                             (create-todo new-todo)
                             (set-task! "")
                             (set-limit! (create-date)) 
                             )
                           )}]]])
  )
  
(rum/defc hello-world []
  ; React Hooks Settings 
  (rum/use-effect!
   (fn []
     
     (js/console.log @todos)
     ) [@todos])
  [:div
   [:div.heading
    [:h1 "MY TODO"]]
   (todo-form)
   [:div
    [:ul.container {:style {:list-style "none"}}
     (for [todo @todos]
       (todo-item todo))]]])

(defn start []
  ;; start is called by init and after code reloading finishes
  ;; this is controlled by the :after-load in the config
  (rum/mount (hello-world)
             (. js/document (getElementById "app"))))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (start))

(defn stop []
  ;; stop is called before any code

  (js/console.log "stop"))

; (defn fetch-todos []
;   (-> (js/fetch  "http://localhost:3000/todos"  {:mode "cors"})
;       (.then (fn [response] (.json response)))
;       (.then (fn [json]
;                (println "Response from server:" json)
;                (swap! todos assoc (js->clj json :keywordize-keys true))))))
; (fetch-todos)

; (defn testAPI []
;   (-> (js/fetch "http://localhost:3000/todos"  {:mode "cors"})
;       (.then (fn [response] (.json response)))
;       (.then (fn [json] (reset! todos (js->clj json :keywordize-keys true))))))

; (testAPI)



(defn fetchAll []
  (-> (js/fetch "http://localhost:3000/todos"  {:mode "cors"})
      (.then (fn [response] (.json response)))
      (.then (fn [json] (let [clj-json (js->clj json :keywordize-keys true)
                              todos-with-dates (map #(assoc % :limit_date (format-date (:limit_date %))) clj-json)]
                          (reset! todos todos-with-dates)
                          (rum/mount (hello-world)
                                     (. js/document (getElementById "app"))))))))



(fetchAll)