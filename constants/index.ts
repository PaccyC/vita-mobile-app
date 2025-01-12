import FirstOnboardingImage from "@/assets/images/onboarding_image_1.png"
import SecondOnboardingImage from "@/assets/images/onboarding_image_2.png"
import ThirdOnboardingImage from "@/assets/images/onboarding_image_3.png"
import WelcomeImage from "@/assets/images/welcome.png"
import check from "@/assets/icons/check.svg"
import google from "@/assets/icons/google.svg"
import apple from "@/assets/icons/apple.svg"
export const images = {
    FirstOnboardingImage,
    SecondOnboardingImage,
    ThirdOnboardingImage,
    WelcomeImage,
}


export const icons = {
    check,
    google,
    apple,
}


 const onboarding = [
    {
        id: 1,
        title: "Welcome !",
        description: "We will assist you in efficiently and easily scheduling appointments with doctors.Let's get started!",
        image: images.FirstOnboardingImage
    },
    {
        id: 2,
        title: "Choose Specialization",
        description: "Select the medical specialization you need so we can tailor your experience.",
        image: images.SecondOnboardingImage
    },
    {
        id: 3,
        title: "Schedule Your First Appointment",
        description: "Choose a suitable time and date to meet your preferred doctor. Begin your journey to better health!",
        image: images.ThirdOnboardingImage
    }
]

export const data ={
    onboarding,
}
