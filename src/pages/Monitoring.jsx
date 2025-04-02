import React, { useEffect, useState } from "react";
import MonitoringFundamental from "../components/MonitoringFundamental";
import monitoring from "../assets/monitoring.jpg"; // Adjust the path as necessary

const Monitoring = () => {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);


  return (
    <div
      className={`duration-500 min-h-screen ${isVisible ? "opacity-100" : "opacity-0"}
                bg-[length:250px_250px] sm:bg-[length:300px_300px] md:bg-[length:400px_400px] lg:bg-[length:500px_500px]
                bg-[position:120%_105%] sm:bg-[position:85%_130%] md:bg-[position:85%_130%]`}
      style={{
        backgroundImage: `url(${monitoring})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`min-h-screen text-left max-w-3xl mx-auto py-10 transition-all duration-500 p-8 ${isVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Monitoring</h1>

        <MonitoringFundamental />

        {/* Personal Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">My Experience with Monitoring</h2>
          <p className="text-gray-600">
            I have been using monitoring tools like Prometheus and Grafana for several years to manage and visualize the performance of various systems. From setting up alerts for resource usage spikes to building real-time dashboards, monitoring has been critical in ensuring the reliability and stability of my infrastructure. I enjoy optimizing systems and preventing issues from affecting users.
          </p>
        </section>

        {/* Real-World Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Real-World Projects</h2>
          <p className="text-gray-600">
            <strong>Project:</strong> **Server Monitoring with Prometheus and Grafana**
            <strong>Description:</strong> Set up Prometheus to collect system metrics and configured Grafana dashboards to visualize server health. Integrated alerting to notify the team if any critical metrics, such as CPU usage or memory, exceeded thresholds.
            <strong>Link:</strong> <a href="https://github.com/your-repo" className="text-blue-600">View on GitHub</a>
          </p>
        </section>

        {/* Integration with Other Technologies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Integration with Other Tools</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Docker Monitoring:</strong> Integrated Prometheus with cAdvisor and Node Exporter to monitor Docker containers and system performance in real-time.</li>
            <li><strong>Alert Management with Alertmanager:</strong> Configured Alertmanager to handle alerts from Prometheus and send notifications via email or Slack for immediate action.</li>
            <li><strong>Grafana Dashboards:</strong> Created custom Grafana dashboards to visualize server and container metrics, enabling quick insights into system performance.</li>
          </ul>
        </section>

        {/* Best Practices & Troubleshooting */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Best Practices & Troubleshooting</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><strong>Thresholds and Alerts:</strong> Set appropriate alert thresholds for metrics to ensure you're notified only when critical issues arise.</li>
            <li><strong>Monitoring Redundancy:</strong> Use multiple monitoring tools or instances to ensure data reliability and prevent single points of failure.</li>
            <li><strong>Visualization:</strong> Create intuitive Grafana dashboards that display essential metrics clearly to make decision-making easier.</li>
            <li><strong>System Optimization:</strong> Regularly check and optimize monitored systems based on insights to prevent performance degradation over time.</li>
          </ul>
        </section>

        {/* Resources & Further Learning */}
        <section className="mb-8 pb-30">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Resources & Further Learning</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li><a href="https://prometheus.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600">Prometheus Official Website</a></li>
            <li><a href="https://grafana.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600">Grafana Official Website</a></li>
            <li><a href="https://www.udemy.com/course/prometheus-monitoring-for-beginners/" target="_blank" rel="noopener noreferrer" className="text-blue-600">Prometheus Monitoring for Beginners - Udemy</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Monitoring;