(ns clojure-rum-start.part.todoForm
  (:require [clojure-rum-start.client.client :refer [create-todo]]
            [clojure-rum-start.util.generator :refer [create-date]]
            [rum.core :as rum]))

(rum/defc todo-form [todos]
          (let [[task set-task!] (rum/use-state "")
                [limit set-limit!] (rum/use-state (create-date))]
               [:div.add-content
                [:h3 "ADD TODO"]
                [:form
                 [:span {:style {:margin "0 20px"}} "TODO名: "]
                 [:input {:type        :text
                          :value       task
                          :placeholder "Add a new item"
                          :on-change   #(set-task! (.. % -target -value))}]
                 [:span {:style {:margin "0 20px"}} "期限 :"]
                 [:input {:type      :date
                          :value     limit
                          :on-change #(set-limit! (.. % -target -value))}]
                 [:input {:type     :submit
                          :value    "登録"
                          :style    {:margin "0 20px"}
                          :on-click (fn [e]
                                        (.preventDefault e)
                                        (let [new-todo {
                                                        :title      task
                                                        :limit_date limit}]
                                             (create-todo new-todo)
                                             (set-task! "")
                                             (set-limit! (create-date))
                                             (reset! todos nil)
                                             )
                                        )}]]])
          )
