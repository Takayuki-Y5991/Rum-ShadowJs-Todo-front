(ns clojure-rum-start.util.parser)

(defn format-date
      ;String Date Type parse yyyy-MM-dd Format
      [date-str]
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