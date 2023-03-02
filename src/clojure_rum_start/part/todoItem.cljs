(ns clojure-rum-start.part.todoItem
  (:require [clojure-rum-start.client.client :refer [delete updateStatus]]
            [rum.core :as rum]))

(defn updateTodos [todo-id complete-status now-todos set-todos-atom]
  (let [new-todos (map #(if (= (:id %) todo-id)
                          (assoc % :completed  complete-status)
                          %)
                       now-todos)]
    (set-todos-atom new-todos)
    ))

(defn deleteTodos [todo-id now-todos set-todos-atom]
  (let [new-todos (->> now-todos
                       (filter #(not= (:id %) todo-id)))]
    (set-todos-atom new-todos)
    ))



(rum/defc todo-item [todo todos-atom set-todos-atom]
  (let [todo-id (:id todo)
        completed-status (:completed todo)]
    [:li.card {:key todo-id
               :style {:color (if completed-status "green" "red")}}
     [:h3.todo-content (:title todo)]
     [:div.todo-limit "期限 : " (:limit_date todo)]
     [:div.update-button
      [:input {:type     :button
               :value    (if completed-status "完了" "未完了")
               :on-click #(do 
                            (updateStatus  {:status (not completed-status)} todo-id) 
                            (updateTodos todo-id 
                                         (not completed-status)
                                         todos-atom
                                         set-todos-atom))}]
      [:input {:type     :button
               :value    "削除"
               :on-click #(do
                            (delete todo-id)
                            (deleteTodos todo-id todos-atom set-todos-atom)
                            )}]]]))