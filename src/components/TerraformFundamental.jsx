import React, { useEffect, useState, useRef } from "react";

const TerraformFundamental = () => {
    const [showBasics, setShowBasics] = useState(false);
    const [height, setHeight] = useState(0);
    const basicsRef = useRef(null);
    const sectionRef = useRef(null);

    // Detect visibility of the section using IntersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    // Close the section when it's not visible, but don't affect the page's animation
                    setShowBasics(false);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the section is in view
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    useEffect(() => {
        if (showBasics && basicsRef.current) {
            setHeight(basicsRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [showBasics]);

    return (
        <div>
            {/* Fundamental Concepts (Collapsible with Animation) */}
            <section className="mb-8" ref={sectionRef}>
                <button
                    onClick={() => setShowBasics(!showBasics)}
                    className="w-full text-left bg-gray-200 p-3 rounded-md font-semibold hover:bg-gray-300 transition flex justify-between items-center"
                >
                    <span>Terraform Fundamentals</span>
                    <span>{showBasics ? "↑" : "↓"}</span>
                </button>

                <div
                    ref={basicsRef}
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ height: `${height}px` }}
                >
                    <div className="mt-4 p-4 bg-gray-100 rounded-md">
                        {/* Introduction */}
                        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Introduction to Terraform</h2>
                        <p className="text-gray-600">
                            Terraform is an open-source infrastructure as code (IaC) tool that allows users to define and provision data center infrastructure using a declarative configuration language known as HCL (HashiCorp Configuration Language). Terraform allows you to manage infrastructure on cloud providers, virtual machines, networks, and other resources in a safe, repeatable, and automated way.
                        </p>

                        {/* Key Concepts */}
                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Key Concepts</h2>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li><strong>Providers:</strong> Plugins that allow Terraform to interact with cloud platforms and services (e.g., AWS, Azure, Google Cloud).</li>
                            <li><strong>Resources:</strong> Define the infrastructure components (e.g., servers, storage, network) that Terraform manages and provisions.</li>
                            <li><strong>Modules:</strong> Reusable, self-contained configurations that can be used to organize and scale Terraform code.</li>
                            <li><strong>State:</strong> Terraform maintains an up-to-date state of the infrastructure it manages, ensuring that changes are applied safely.</li>
                            <li><strong>Plan:</strong> A preview of the changes Terraform will make to your infrastructure, allowing you to review before applying.</li>
                            <li><strong>Apply:</strong> The command that makes the desired changes to the infrastructure based on the Terraform configuration.</li>
                        </ul>

                        {/* Hands-On */}
                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Getting Started with Terraform</h2>
                        <p className="text-gray-600">
                            Here's how you can get started with Terraform:
                        </p>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li><strong>Install Terraform:</strong> Download Terraform from the official website (https://www.terraform.io/).</li>
                            <li><strong>Create a Configuration File:</strong> Define your resources using the HashiCorp Configuration Language (HCL).</li>
                            <li><strong>Initialize Terraform:</strong> Use the `terraform init` command to initialize your working directory and download required provider plugins.</li>
                            <li><strong>Run Terraform Plan:</strong> Execute `terraform plan` to preview changes to your infrastructure.</li>
                            <li><strong>Apply Configuration:</strong> Use `terraform apply` to provision resources and apply your changes to the cloud.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TerraformFundamental;