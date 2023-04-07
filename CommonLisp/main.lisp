(defun echo (arg)
  (print (concatenate 'string arg "!!!")))

(echo "Hello World")

(defun plus (a b)
  (print (+ a b)))

(plus 1 2)
