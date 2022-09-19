from turtle import Screen
import time
from snake import Snake
from food import Food
from scoreboard import Score

screen = Screen()
screen.bgcolor("black")
screen.setup(width=600, height=600)
screen.title("My Snake Game")
screen.tracer(0)

game_is_on = True
snake1 = Snake()
food = Food()
score = Score()

screen.listen()
screen.onkey(snake1.up, "Up")
screen.onkey(snake1.down, key="Down")
screen.onkey(snake1.left, key="Left")
screen.onkey(snake1.right, key="Right")

while game_is_on:

    screen.update()
    time.sleep(0.5)
    snake1.move()

    # Detect collision with food
    if snake1.head.distance(food) < 20:
        food.refresh()
        score.increase_score()
        snake1.grow()

    hit_wall = snake1.head.xcor() > 295 or snake1.head.xcor() < -295 or snake1.head.ycor() > 295 or snake1.head.ycor() < -295
    # detect collision with wall/body, trigger Game Over
    if hit_wall:
        game_is_on = False
        score.game_over()

    for segment in snake1.segments[1:]:
        if snake1.head.distance(segment) < 10:
            game_is_on = False
            score.game_over()


screen.exitonclick()
