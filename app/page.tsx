"use client";
import React, { useState } from "react";
import BasicDocument from "@/components/BasicDocument";

export default function Home() {
  const title = "Atestado de Sanidade Mental";

  const pacientName = "Italo";
  const document = "11555222-41";
  const cpf = "021.155.222-55";
  const state = "Paraná";
  const expeditor = "SJP";
  const city = "São José dos Pinhais";

  const today = new Date();

  const day = String(today.getDate()).padStart(2, "0");
  const monthIndex = today.getMonth();
  const year = today.getFullYear();

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const month = months[monthIndex];

  const formattedDate = `${day} de ${month} de ${year}`;
  const systemProfessional = "Mauricio Cunha";

  const text = `Declaro que o periciado(a) ${pacientName} RG ${document} ${expeditor} ${city} CPF ${cpf} foi avaliado neste serviço por mim no dia ${formattedDate} para fins de avaliação de sanidade mental. Durante a entrevista, o(a) examinado(a) negou sintomas atuais ou pregressos psiquiátricos, bem como negou uso prévio de psicofarmacos. Não foram verificados indícios do uso de psicofarmacos.Ao exame psíquico, encontra-se vigil, orientada em tempo e espaço, receptiva ao contato, eutimico, com afeto modulado, pensamento organizado e lógico, sem alterações de curso, discurso coerente, juízo crítico e de realidade preservado. Sem alterações de psicomotricidade ou de sensopercepção. Não identifico pela entrevista psiquiátrica e exame psíquico nenhuma alteração que altere sua sanidade mental e/ou capacidade civil. No momento paciente encontra-se apto, do ponto de vista psiquiátrico para ingressar na maçonaria.`;

  const expertiseAt = `${state}, ${formattedDate}`;
  const line = "________________________";
  const professional = `Dr. ${systemProfessional}`;

  const crm = "12345";
  const crmExpeditor = "SC";
  const crmCurse = "RQE SC";
  const crmCurseNumber = "123445";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BasicDocument
        title={title}
        text={text}
        expertiseAt={expertiseAt}
        assignatureLine={line}
        professional={professional}
        crm={crm}
        crmExpeditor={crmExpeditor}
        crmCurseNumber={crmCurseNumber}
        crmCurse={crmCurse}
      />
    </main>
  );
}
