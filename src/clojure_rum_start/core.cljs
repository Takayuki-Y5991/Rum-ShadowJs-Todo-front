(ns clojure-rum-start.core
  (:require [clojure-rum-start.client.client :refer [fetch-all]]
            [clojure-rum-start.part.todoForm :refer [todo-form]]
            [clojure-rum-start.part.todoItem :refer [todo-item]]
            [clojure.string :as str]
            [rum.core :as rum]))

(defonce todos (atom nil))

(rum/defc hello-world []
          ; React Hooks Settings
          (rum/use-effect!
            (fn []
                (fetch-all todos)
                (println @todos)
                ) [@todos])
          [:div
           [:div.heading
            [:h1 "MY TODO"]]
           (todo-form todos)
           [:div
            [:ul.container {:style {:list-style "none"}}
             (for [todo @todos]
                  (todo-item todo todos))]]])

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
;(fetch-all todos)

