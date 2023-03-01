(ns clojure-rum-start.part.todoItem
  (:require [clojure-rum-start.client.client :refer [delete update-status]]
            [rum.core :as rum]))


(defn remove-todo [todos todo-id]
      (filter #(not= (:id %) todo-id) todos))

(rum/defc todo-item [todo todos]
          (let [[completed-status is-completed-status!] (rum/use-state (:completed todo))
                todo-id (:id todo)]
               [:li.card {:key todo-id :style {:color (if completed-status "green" "red")}}
                [:h3.todo-content (:title todo)]
                [:div.todo-limit "期限 : " (:limit_date todo)]
                [:div.update-button
                 [:input {:type     :button
                          :value    (if completed-status "完了" "未完了")
                          :on-click #(update-status {:status (not completed-status)} todo-id)}]
                 ; #(is-completed-status! (not completed-status))
                 [:input {:type     :button
                          :value    "削除"
                          :on-click #(delete todo-id)}]
                 ;  #(swap! todos remove-todo todo-id)
                 ]
                ]
               )
          )