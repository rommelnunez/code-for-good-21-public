from parsing import *
from keywords import qs
from collections import Counter
import math
from flask import Blueprint, request, jsonify

# prevent any ssl issues
ssl._create_default_https_context = ssl._create_unverified_context

Score = Blueprint('score', __name__)

@Score.route("/api/score", methods=["POST"])
def score():
    lst = [0] * 11

    total_words = parse()
    word_counts = Counter(total_words)
    print(len(total_words))
    count = 0 
    for key, value in word_counts.items():
        for index, arr in enumerate(qs):
            if key.lower() in arr:
                lst[index] += 1 
                if lst[index] == len(arr):
                    print(arr)
                    count += 1 
    print(count)
    count /= 11
    count *= 10
    print(math.ceil(count))
    return jsonify({'result': math.ceil(count)})
