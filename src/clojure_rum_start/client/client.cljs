(ns clojure-rum-start.client.client
  (:require [clojure-rum-start.util.common :refer [error-handler]]
            [clojure-rum-start.util.parser :refer [format-date]]
            [clojure.core.async :as async　:refer [<! >! go]]
            [clojure.string :as s]))
(defn createTodo [todo]
      (let [url "http://localhost:3000/todo"
            options {:mode    "cors"
                     :method  "POST"
                     :body    (js/JSON.stringify (clj->js todo))
                     :headers {"Content-Type" "application/json"}}]
           (-> (js/fetch url (clj->js options))
               (.catch #(error-handler %)))))

(defn updateStatus [todo id]
      (let [url (str "http://localhost:3000/todo/changeStatus/" id)
            options {
                     :mode    "cors"
                     :method  "PATCH"
                     :body    (js/JSON.stringify (clj->js todo))
                     :headers {"Content-Type" "application/json"}
                     }]
           (-> (js/fetch url (clj->js options))
               (.catch #(error-handler %)))))
(defn delete [id]
      (let [url (str "http://localhost:3000/todo/" id)
            options {:mode    "cors"
                     :method  "DELETE"
                     :headers {"Content-Type" "application/json"}
                     }]
           (-> (js/fetch url (clj->js options))
               (.catch #(error-handler %)))))

(defn fetchAll [set-todos-atom]
     (-> (js/fetch "http://localhost:3000/todos" {:mode   "cors"
                                                  :method "GET"})
         (.then (fn [response] (.json response)))
         (.then (fn [json] (let [clj-json (js->clj json :keywordize-keys true)
                                 todos-with-dates (map #(assoc % :limit_date (format-date (:limit_date %))) clj-json)]
                                (set-todos-atom todos-with-dates))))))
; (defn fetch-all [todos-atom]
;       (go
;         (let [response (<! (async/go (js/fetch "http://localhost:3000/todos" {:mode "cors" :method "GET"})))
;               json (js->clj (js/JSON.parse (;body response)) :keywordize-keys true)
;               todos-with-dates (map #(assoc % :limit_date (format-date (:limit_date %))) json)]
;              (reset! todos-atom todos-with-dates))))


; (defn fetchAll [set-todos-atom]
;   (async/go
;     (let [response (<! (js/fetch "http://localhost:3000/todos" {:mode "cors"
;                                                                 :method "GET"}))
;           json (<! (.json response))]
;       (js/console.log "JSON: " json)
;       (let [todos-with-dates (map #(assoc % :limit_date (format-date (:limit_date %))) json)]
;         (set-todos-atom todos-with-dates)))))