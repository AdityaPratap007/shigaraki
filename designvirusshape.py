# import turtle
# a=turtle.Turtle()
# a.color('blue')
# a.speed(0)
# a.hideturtle()
# s=turtle.Screen()
# s.bgcolor('black')
# for x in range(200):
# 	a.forward (x)
# 	a.left(x-1)
# turtle.done()
import turtle as T
T.bgcolor('black')
T.speed(0)
T.pencolor('red')
for i in range(180):
    T.fd(i*3)
    T.rt(i*1)
T.done