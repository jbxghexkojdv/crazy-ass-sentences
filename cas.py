import json
from random import random


def randelem(arr):
    return arr[int(random()*len(arr))]


def main():
    things = json.loads(open("cas.json", "r")
                        .read())

    def sentences(lang):
        amount = int(input("How many sentences \
do you want? "))
        puncnum = int(random()*3)
        for i in range(amount):
            print(things[lang]["punc"][1][puncnum] +
                  things[lang]["beginnings"][int(random()*len(things[lang]["begin\
nings"]))] + " " + randelem(things[lang]["endings"]) +
                  things[lang]["punc"][0][puncnum])

    match input("Enter 0 for English\
, 1 for Spanish: "):
        case "1":
            sentences("spanish")
        case _:
            sentences("english")


if __name__ == "__main__":
    main()
