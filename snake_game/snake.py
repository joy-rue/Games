from turtle import Turtle, Screen

START_POSITION = [(0, 0), (-20, 0), (-40, 0)]
MOVE_DISTANCE = 20
UP = 90
DOWN = 270
LEFT = 180
RIGHT = 0


class Snake:
    def __init__(self):
        self.segments = []
        self.create_snake()
        self.head = self.segments[0]

    def create_snake(self):
        for i in range(3):
            snake1 = Turtle(shape="square")
            snake1.color("white")
            snake1.penup()
            snake1.goto(START_POSITION[i])
            self.segments.append(snake1)

    def move(self):

        for seg_num in range(len(self.segments) - 1, 0, -1):
            new_x = self.segments[seg_num - 1].xcor()
            new_y = self.segments[seg_num - 1].ycor()
            self.segments[seg_num].goto(new_x, new_y)
        self.head.forward(MOVE_DISTANCE)

    def up(self):
        """Turns snake body to the north"""
        if self.head.heading() != DOWN:
            self.head.setheading(UP)

    def down(self):
        """Turns snake body to the south"""
        if self.head.heading() != UP:
            self.head.setheading(DOWN)

    def right(self):
        """Turns snake body to the forward/right"""
        if self.head.heading() != LEFT:
            self.head.setheading(RIGHT)

    def left(self):
        """Turns snake body to the backwards/left"""
        if self.head.heading() != RIGHT:
            self.head.setheading(LEFT)

    def grow(self):
        last_seg = self.segments[-1].pos()
        snake1 = Turtle(shape="square")
        snake1.color("white")
        snake1.penup()
        snake1.goto(last_seg)
        self.segments.append(snake1)
