from django.shortcuts import render
import requests

# Create your views here.
def chatbot(request):
  context ={}
  base_url='https://aff4-197-251-206-7.ngrok-free.app/'
  if request.method=="POST":
    btnOne = request.POST['btnOne']
    print(btnOne)
    
    # if btnOne=="submit":
    #   user = request.POST['user']

    if btnOne == "submit_btn":
      userinput = request.POST['user']
      
      payload={
        'user': userinput
      }

      print(payload)
      
      response = requests.post(base_url+ 'chatbot/', data=payload).json()
      context["message"]=response.json
      print(response)
      
      
    
  return render(request, "index.html" ,context)