import eel 

eel.init('web')


#предпологается что либо из этого чуда будет вызываться весь докер либо что-то похожее всунуть в docer.py 
@eel.expose
def render_doc(disc_name):
    print('Имя дисциплины: ', disc_name)


eel.start('main.html')