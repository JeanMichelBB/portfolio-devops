import React, { useEffect, useState } from "react";

const Monitoring = () => {
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
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Monitoring</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Infrastructure Monitoring</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I specialize in monitoring IT infrastructures, ensuring that servers, networks, and other critical components are always
          functioning optimally. By using tools like <strong>Prometheus</strong> and <strong>Grafana</strong>, I track system performance,
          monitor resource usage, and proactively address issues before they impact production environments.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Application Performance Monitoring</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I use application performance monitoring (APM) tools to monitor and optimize application performance. This includes
          tracking response times, error rates, and user experience metrics. Tools such as <strong>New Relic</strong> and <strong>Datadog</strong>
          help me identify bottlenecks and optimize code for better scalability and reliability.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Log Aggregation and Analysis</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          By implementing centralized logging systems with tools like <strong>ELK Stack</strong> (Elasticsearch, Logstash, Kibana) and
          <strong>Fluentd</strong>, I aggregate logs from various services to gain deep insights into application behavior and system
          performance. This allows for quicker detection of errors and helps troubleshoot issues more efficiently.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Alerting and Incident Management</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I configure automated alerting and incident management systems to ensure rapid responses to any issues that arise. Using
          tools like <strong>Alertmanager</strong> and <strong>PagerDuty</strong>, I ensure that critical notifications are sent to
          the right teams, improving response times and minimizing downtime.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Custom Dashboards and Reporting</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I create custom dashboards to visualize key performance indicators (KPIs) and operational metrics. This provides a
          real-time overview of system health, application performance, and user activity. Tools like <strong>Grafana</strong> help
          create intuitive and interactive dashboards for different stakeholders.
        </p>
      </section>
    </div>
  );
};

export default Monitoring;