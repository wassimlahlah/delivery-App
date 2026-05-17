from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Candidate
from .serializers import CandidateSerializer

@api_view(['GET'])
def get_candidates(request):
    candidates = Candidate.objects.all()
    serializer = CandidateSerializer(candidates, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_candidate(request):
    serializer = CandidateSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

    return Response(serializer.errors)

@api_view(['DELETE'])
def delete_candidate(request, pk):
    candidate = Candidate.objects.get(id=pk)
    candidate.delete()
    return Response({"message": "Deleted"})