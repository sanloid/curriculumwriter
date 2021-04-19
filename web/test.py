import eel

eel.init('web')

import docer

#предпологается что либо из этого чуда будет вызываться весь докер либо что-то похожее всунуть в docer.py 
@eel.expose
def render_doc(programm_discipline, number_direction, name_direction, decryption):
    docer.btn_click(programm_discipline, number_direction, name_direction, decryption)

eel.start('main.html')
render_doc()
