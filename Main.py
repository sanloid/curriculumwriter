from docxtpl import DocxTemplate
from openpyxl import load_workbook
import eel
import datetime

now = datetime.datetime.now()
month_dict = {1: "январь", 2: "февраль", 3: "марть", 4: "апрель", 5: "май", 6: "июнь", 7: "июль", 8: "август", 9: "сентябрь", 10: "октябрь", 11: "ноябрь", 12: "декабрь"}
year = now.year
day = now.day
month = month_dict[now.month]


list_file = open('Lists/list_discip.txt')
disc_array = []
for line in list_file:
    string = line.replace("\n", "")
    disc_array.append(string)
list_file.close

list_file_num = open('Lists/list_num.txt')
num_array = []
for line in list_file_num:
    string = line.replace("\n", "")
    num_array.append(string)
list_file_num.close

list_file_spec = open('Lists/list_spec.txt')
spec_array = []
for line in list_file_spec:
    string = line.replace("\n", "")
    spec_array.append(string)


list_file_naprav = open('Lists/list_naprav.txt')
naprav_array = []
for line in list_file_naprav:
    string = line.replace("\n", "")
    naprav_array.append(string)

def checking_values(value):
    return value if value else 0

def btn_click(programm_discipline, number_direction, name_direction, decryption):

    doc = DocxTemplate("Temp/Template.docx")
    
    wb = load_workbook('Temp/plan.xlsx')
    sheet = wb.get_sheet_by_name('Лист1')

    number_of_row = sheet.max_row
    number_string = 0

    for i in range(number_of_row):
        if sheet['C'+ str(i + 1)].value == programm_discipline:
            number_string = i + 1
            break
    
    input_cells = ['O', 'T', 'U', 'W', 'V', 'M', 'L']
    context = dict()

    print(number_string)

    for cell in input_cells:
        context[f'cell_{cell}'] = checking_values(sheet[cell + str(number_string)].value)
    
    # совсем плохо 
    context['SRS_les'] = int(context['cell_V']) - int(context['cell_W'])
    context['pas_type']  = 'экзамен'
    context['programm_discipline'] = programm_discipline
    context['number_direction'] = number_direction
    context['name_direction'] = name_direction
    context['decryption'] = decryption
    context['day'] = day
    context['month'] = month
    context['year'] = year
    doc.render(context)
    doc.save("CompiledPrograms/"+programm_discipline + " составленная программа.docx")


eel.init('web')

@eel.expose
def render_doc(programm_discipline, number_direction, name_direction, decryption):
    btn_click(programm_discipline, number_direction, name_direction, decryption)


for i in range(len(disc_array)):
    eel.addOption(disc_array[i])

for i in range(len(num_array)):
    eel.addOptionToNum(num_array[i])

for i in range(len(spec_array)):
    eel.addOptionToSpec(spec_array[i])

for i in range(len(naprav_array)):
    eel.addOptionToNaprav(naprav_array[i])

eel.start('main.html', size = (500 , 500))
