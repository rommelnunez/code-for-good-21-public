#importing required module
from parsing import *
from keywords_doc import total_questions
import math


#words parsed from a document
total_words = parse()
   
#list of keywords from selected keyword file
keyword=['random','keywords', 'ahoy'] 
#matches the keywords from the parsed words
result=[k for k in total_questions if any(k in m for m in total_words)]
#gets the score by calculating number of mathced keywords divided by the total number of keywords
print(result)
num=float(len(result))
score_one=num/len(total_questions)
score_one*=10
    
print(math.ceil(score_one))
#score derived from keyword matched from the 11 arrays

# each question has keywords, we have 11 questions, so we can have 11 arrays with certain keywrods. 
#get the length of the result, use the length of the result and divide it by the total keywords to get a score


