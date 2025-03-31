import React, { useEffect, useState } from "react";

const Cloud = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div
      className={`min-h-screen text-left max-w-3xl mx-auto py-10 transition-all duration-500 p-8 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Cloud Computing</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Cloud Platforms</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I have hands-on experience working with various cloud platforms like
          <strong> AWS, Google Cloud, and Microsoft Azure</strong>. I specialize in
          deploying, managing, and scaling applications in the cloud, leveraging
          the full potential of cloud-native services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Infrastructure as Code (IaC)</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I use tools like <strong>Terraform</strong> and <strong>CloudFormation</strong> to automate infrastructure provisioning, enabling efficient
          management of cloud resources and ensuring consistency across multiple
          environments.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Containerization and Orchestration</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I leverage <strong>Docker</strong> and <strong>Kubernetes</strong> for containerizing applications and orchestrating their deployment in cloud
          environments, enabling scalability, resilience, and fault tolerance.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Cloud Security</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I ensure that cloud infrastructures are secure by implementing best
          practices such as role-based access control (RBAC), data encryption, and
          network security configurations. I am well-versed in securing cloud
          applications and managing compliance with industry standards.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">CI/CD in Cloud</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I integrate continuous integration and continuous deployment (CI/CD) in
          the cloud environment to automate testing, deployment, and scaling of
          applications, ensuring faster and more reliable delivery of software.
        </p>
      </section>
    </div>
  );
};

export default Cloud;