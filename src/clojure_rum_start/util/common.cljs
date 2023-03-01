(ns clojure-rum-start.util.common)

;; FIXME: ERROR PAGE作成時に修正予定
(defn error-handler
      ; API Error Response
      [err]
      (println (str "Error: " (.-message err))))



