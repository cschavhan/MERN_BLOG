function About() {
  return (
    <div className="h-[75vh] flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About MERN' Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to MERN Blog! This blog was created by Chandrakant Chavhan
              as a personal project. I am is a passionate developer who looking
              for employment as a MERN stack developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
