from django.shortcuts import render

# Create your views here.
from django.views import generic
from rest_framework import viewsets, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.models import Course
from api.serializers import CourseSerializer, RegisterSerializer, AuthenticSerializer


class CourseViewSet(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def pg(request):
    print(AuthenticSerializer(request.user).data)
    return Response({"PROBANDI" "SI_function"}, 200)
