from rest_framework import serializers
from users.models import CustomUser
from django.contrib.auth import authenticate

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    CustomUser._meta.get_field("email")._unique = True

    class Meta:
        model = CustomUser
        fields = ("id", "username", "email", "upVote", "downVote")


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ("id", "username", "email", "password")
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            validated_data["username"],
            validated_data["email"],
            validated_data["password"],
        )
        return user


# Update Serializer
# class UpdateSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CustomUser
#         fields = ("upVote", "downVote")

#     def update(self, instance, validated_data):
#         instance.upVote = validated_data.get("upVote", instance.upVote)
#         instance.downVote = validated_data.get("downVote", instance.downVote)

#         instance.save()
#         return instance


# Login Serializer
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials!")
