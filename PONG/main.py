import time
from turtle import Screen, Turtle
from pandles import Paddle
from ball import Ball
from time import sleep

screen = Screen()
screen.bgcolor("black")
screen.setup(width=800, height=600)
screen.title("Pong")
screen.tracer(0)

paddle1 = Paddle(350, 0)
paddle2 = Paddle(-350, 0)
ball = Ball()

screen.listen()
screen.onkey(fun=paddle1.go_up, key="Up")
screen.onkey(fun=paddle1.go_down, key="Down")

screen.onkey(fun=paddle2.go_up, key="w")
screen.onkey(fun=paddle2.go_down, key="s")

game_on = True
while game_on:
    screen.update()
    time.sleep(0.1)
    if ball.ycor() == 200 or ball.ycor() == -300:
        ball.move_down()

    else:
        ball.move()








screen.exitonclick()