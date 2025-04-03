import React, { useEffect, useState } from 'react';
import mqtt from 'mqtt';
import './App.css';

const mqttBrokerURL = 'ws://localhost:9001';
const mqttConnectOptions = {
    username: 'webapp',
    password: 'as',
    clientId: 'webapp',
    clean: true,
    keepalive: 60000
};

let realtimeMeasurement;
let temperatureC;
let temperatureF;
let moisture;
let currentTime;

function Plants() {
  const [temperatureCState, setTemperatureCState] = useState(0);
  const [temperatureFState, setTemperatureFState] = useState(0);
  const [capacityState, setCapacityState] = useState(0);
  const [currentTimeState, setCurrentTimeState] = useState(0);
  const [instructionState, setInstructionState] = useState('-');

  useEffect(() => {
    const mqttClient = mqtt.connect(mqttBrokerURL, mqttConnectOptions);
    mqttClient.on('connect', () => {
        console.log('Connected to MQTT broker');
        mqttClient.subscribe("webapp/rose/measurement");
    });

    mqttClient.on('message', (topic, message) => {
        console.log('Received message: ', topic, message.toString());
        if (topic === 'webapp/rose/measurement') {
            realtimeMeasurement = message.toString();
            temperatureC = realtimeMeasurement.substring(0, realtimeMeasurement.indexOf('#'));
            setTemperatureCState(temperatureC);
            temperatureF = realtimeMeasurement.substring(realtimeMeasurement.indexOf('#') + 1, realtimeMeasurement.indexOf('-'));
            setTemperatureFState(temperatureF);
            moisture = realtimeMeasurement.substring(realtimeMeasurement.indexOf('-') + 1, realtimeMeasurement.indexOf(':'));
            setCapacityState(moisture);
            if (moisture < 10) {
              setInstructionState('Soil too dry, need water');
            } else if (moisture > 50) {
              setInstructionState('Soil too wet, do not water more');
            } else {
              setInstructionState('Sufficient moisture, do not water');
            }
            currentTime = realtimeMeasurement.substring(realtimeMeasurement.indexOf(':') + 1);
            setCurrentTimeState(currentTime);
            console.log('Temperature C: ' + temperatureC);
            console.log('Temperature F: ' + temperatureF);
            console.log('Moisture: ' + moisture);
            console.log('Current Timestamp: ' + currentTime);
        }
    });

    mqttClient.on('error', (error) => {
        //console.error('MQTT client error:', error);
    });
});

  return (
    <div>
      <h4 class="center-text">Current Rose Pot Condition</h4>
      <h5 class="center-text">Time: {currentTimeState}</h5>
      <h5 class="center-text">Soil Temperature: {temperatureCState}°C, {temperatureFState}°F</h5>
      <h5 class="center-text">Soil Moisture: {capacityState}%</h5>
      <h5 class="center-text">Instruction: {instructionState}</h5>
    </div>
  );
}

export default Plants;
