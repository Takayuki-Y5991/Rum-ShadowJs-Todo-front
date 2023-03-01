(ns clojure-rum-start.util.generator)

(defn create-date
      ; Generation String Date (Format yyyy-MM-dd)
      []
      (str (.getFullYear (js/Date.)) "-" (.getMonth (js/Date.)) "-" (.getDate (js/Date.))))

