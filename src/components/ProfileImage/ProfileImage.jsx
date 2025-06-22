function ProfileImage() {
    return (
        <div className="flex justify-center items-start">
            <img
                src=""
                alt="Profile"
                className="w-64 h-64 lg:w-60 lg:h-60 xl:w-64 xl:h-64 rounded-full object-cover object-center shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            />
        </div>
    );
}

export default ProfileImage;
