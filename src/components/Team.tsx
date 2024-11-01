import React from 'react';
import { Users } from 'lucide-react';

const team = [
  { 
    name: 'Tuy Nguyen', 
    role: 'Project Sponsor',
    bio: 'Professor Tuy Nguyen is currently an Assistant Professor at the School of Informatics, Computing, and Cyber Systems at Northern Arizona University. Previously, he held the positions of Lecturer at the School of Global Convergence Studies and Post-Doctoral Fellow at the Department of Electrical and Computer Engineering at Inha University, from May 2021 to August 2022. Prior to that, he worked as a Senior Research Engineer at Conextt Inc., contributing from September 2019 to April 2021. He earned his Ph.D. in Information and Communication Engineering from Inha University in August 2019.'
  },
  { 
    name: 'Jiawen Zhao', 
    role: 'Project Manager',
    bio: 'Hello! This is Jiawen Zhao. I am a computer engineering student at Northern Arizona University. My primary academic focus is on machine learning (image processing), a field that deeply fascinates me. In my leisure time, I engage in small-scale IoT projects, where I find great satisfaction in blending hardware and software to create tangible, functional devices. My programming experience casts through a vast array of Python, R, C, Javascript, Verilog, Assembly, etc.'
  },
  { 
    name: 'Xiwei Wang', 
    role: 'Team Treasurer',
    bio: 'Hello! This is Xiwei Wang. I am a computer engineering student at Northern Arizona University. My primary academic focus is on machine learning (image processing), a field that deeply fascinates me. In my leisure time, I engage in FPGA projects, where I find great satisfaction in blending hardware and software to create tangible, functional devices. My programming experience casts through a vast array of Python, Goland, C, Java, Verilog, etc.'
  },
  { 
    name: 'Rudra Amin', 
    role: 'Project Secretary',
    bio: 'Hi, my name is Rudra I am a senior at northern Arizona university. I am pursuing a bachelors degree in computer engineering. I am originally from India but my family and I moved to America when I was 12 so I was kind of raised in America as well as India. I enjoy watching sports and television. I also love playing sport. My favorite is soccer'
  },
  { name: 'Loren Larrieu', role: 'Consultant' },
  { name: 'Rodolfo Echavarria', role: 'Consultant' }
];

export function Team() {
  return (
    <section id="team" className="min-h-screen py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col items-center mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center mb-4">
                  <Users className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800">{member.name}</h3>
                <p className="text-gray-600 text-center">{member.role}</p>
              </div>
              {member.bio && (
                <p className="text-sm text-gray-700 mt-4 leading-relaxed">
                  {member.bio}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}