from django.shortcuts import render

# Create your views here.
def index(request):
    audio_file = []
    print(audio_file)
    return render(request, 'index.html')
