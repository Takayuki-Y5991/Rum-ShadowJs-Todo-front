(ns clojure-rum-start.client.client
  (:require [clojure-rum-start.util.common :refer [error-handler]]
            [clojure-rum-start.util.parser :refer [format-date]]))
(defn create-todo [todo]
      (let [url "http://localhost:3000/todo"
            options {:mode    "cors"
                     :method  "POST"
                     :body    (js/JSON.stringify (clj->js todo))
                     :headers {"Content-Type" "application/json"}}]
           (-> (js/fetch url (clj->js options))
               (.catch #(error-handler %)))))


(defn update-status [todo id]
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

(defn fetch-all [todos]
      (-> (js/fetch "http://localhost:3000/todos" {:mode   "cors"
                                                   :method "GET"})
          (.then (fn [response] (.json response)))
          (.then (fn [json] (let [clj-json (js->clj json :keywordize-keys true)
                                  todos-with-dates (map #(assoc % :limit_date (format-date (:limit_date %))) clj-json)]
                                 (reset! todos todos-with-dates))))))