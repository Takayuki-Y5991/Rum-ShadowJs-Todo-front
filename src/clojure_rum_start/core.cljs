(ns clojure-rum-start.core
  (:require [clojure-rum-start.part.todoForm :refer [todo-form]]
            [clojure-rum-start.part.todoItem :refer [todo-item]]
            [clojure-rum-start.client.client :refer [fetchAll]]
            [rum.core :as rum]))

(rum/defc hello-world []
  (let [[todos set-todos] (rum/use-state [])]
    (rum/use-effect!
     (fn []
       (fetchAll (fn [new-todos]
                   (when-not (= new-todos todos)
                     (set-todos new-todos))))
       (println todos))
     [todos])
    [:div
     [:div.heading
      [:h1 "MY TODO"]]
     (todo-form todos set-todos)
     [:div
      [:ul.container {:style {:list-style "none"}}
       (for [todo todos]
         (todo-item todo todos set-todos))]]]))


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
