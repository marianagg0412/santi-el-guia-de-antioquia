'use client';
import { useEffect } from 'react';

const DIdAgent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://agent.d-id.com/v1/index.js';
    script.setAttribute('data-name', 'did-agent');
    script.setAttribute('data-mode', 'fabio');
    script.setAttribute('data-client-key', 'Z29vZ2xlLW9hdXRoMnwxMDc0NzQzODg2MzUwNTczMzg2OTg6dlp1Z3NVTThReFJFSHVKcDF0TTB2');
    script.setAttribute('data-agent-id', 'agt_PvV6Mitx');
    script.setAttribute('data-monitor', 'true');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default DIdAgent;
