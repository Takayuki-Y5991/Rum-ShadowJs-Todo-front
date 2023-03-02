(ns clojure-rum-start.part.todoForm
  (:require [clojure-rum-start.client.client :refer [createTodo]] 
            [rum.core :as rum]))

(rum/defc todo-form [todos set-todos]
  (let [new-todo-atom (atom {})]
    [:div.add-content
     [:h3 "ADD TODO"]
     [:form {:on-submit #(do
                           (.preventDefault %)
                           (createTodo @new-todo-atom)
                           (set-todos (into [] (conj todos @new-todo-atom)))
                           (reset! new-todo-atom {}))}
      [:span {:style {:margin "0 20px"}} "TODO名: "]
      [:input {:type        :text
               :value       (:title @new-todo-atom)
               :placeholder "Add a new item"
               :on-change   #(swap! new-todo-atom assoc :title (-> % .-target .-value))}]
      [:span {:style {:margin "0 20px"}} "期限 :"]
      [:input {:type      :date
               :value     (:limit_date @new-todo-atom)
               :on-change #(swap! new-todo-atom assoc :limit_date (-> % .-target .-value))}]
      [:input {:type :submit
               :value    "登録"
               :style    {:margin "0 20px"}}]]]))



