# importing required modules
import PyPDF2

total = []
def parse():
    # creating a pdf file object
    pdfFileObj = open('sample_input_1.pdf', 'rb')

    # creating a pdf reader object
    pdfReader = PyPDF2.PdfFileReader(pdfFileObj)

    # printing number of pages in pdf file
    print(pdfReader.numPages)

    for i in range(pdfReader.numPages):
        # creating a page object
        pageObj = pdfReader.getPage(32)
        # extracting text from page
        
        words_separated_by_space = pageObj.extractText().strip().split(" ")
        # closing the pdf file object
        while "" in words_separated_by_space:
            words_separated_by_space.remove("")
        total.extend(words_separated_by_space)
        # print(words_separated_by_space)
    pdfFileObj.close()
    return total

parse()