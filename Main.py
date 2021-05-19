from docxtpl import DocxTemplate
from openpyxl import load_workbook
import eel


def checking_values(value):
    return value if value else 0


def btn_click(programm_discipline, number_direction, name_direction, decryption):

    doc = DocxTemplate("templates/Template.docx")
    wb = load_workbook('templates/plan.xlsx')
    sheet = wb.get_sheet_by_name('Лист1')

    number_of_row = sheet.max_row
    number_string = 0

    for i in range(number_of_row):
        if sheet['C'+ str(i + 1)].value == programm_discipline:
            number_string = i + 1
            break
    
    input_cells = ['O', 'T', 'U', 'W', 'V', 'M', 'L']
    context = dict()

    for cell in input_cells:
        context[f'cell_{cell}'] = checking_values(sheet[cell + str(number_string)].value)

    # совсем плохо 
    context['SRS_les'] = int(context['cell_V']) - int(context['cell_W'])
    context['pas_type']  = 'экзамен'
    context['programm_discipline'] = programm_discipline
    context['number_direction'] = number_direction
    context['name_direction'] = name_direction
    context['decryption'] = decryption

    doc.render(context)
    doc.save(programm_discipline + "_programm.docx")


eel.init('web')

#предпологается что либо из этого чуда будет вызываться весь докер либо что-то похожее всунуть в docer.py 
@eel.expose
def render_doc(programm_discipline, number_direction, name_direction, decryption):
    btn_click(programm_discipline, number_direction, name_direction, decryption)

eel.start('index.html')
