
document.addEventListener('DOMContentLoaded', () => {
  // ======= Seletores =======
  const contrastBtn = document.getElementById('contrast-btn');
  const textSizeBtn = document.getElementById('text-size-btn');
  const dyslexiaBtn = document.getElementById('dyslexia-btn');
  const readerBtn = document.getElementById('reader-btn');
  const languageBtn = document.getElementById('language-btn');
  const reportA11yBtn = document.getElementById('report-a11y-btn');
  const body = document.body;

  // ======= Estado =======
  let fontSizeLevel = 0;     // 0 normal, 1 grande, 2 muito grande
  let currentLang = 'pt';    // 'pt' ou 'en'

  // ======= i18n =======
  const i18n = {
    pt: {
      skip_to_content: 'Ir para conteúdo principal',
      site_name: 'EduAcessivel',
      nav_home: 'Início',
      nav_subjects: 'Matérias',
      nav_tools: 'Ferramentas',
      nav_resources: 'Recursos',
      nav_contact: 'Contato',
      welcome_title: 'Bem-vindo ao EduAcessivel',
      purpose_title: 'Nosso Propósito',
      purpose_p1: 'Somos estudantes que estão completando o ensino médio e queremos ajudar os alunos que têm dificuldades (física, visual, auditiva, intelectual e psicossocial).',
      purpose_p2: 'Nosso objetivo é proporcionar uma experiência de aprendizagem acessível, inclusiva e eficaz para todos.',
      subjects_title: 'Matérias Disponíveis',
      subject_math: 'Matemática',
      subject_math_desc: 'Conceitos básicos até avançados com explicações passo a passo e exercícios práticos.',
      subject_port: 'Português',
      subject_port_desc: 'Gramática, interpretação de texto e produção textual com ferramentas de auxílio.',
      subject_sci: 'Ciências',
      subject_sci_desc: 'Biologia, Física e Química com experimentos virtuais e explicações visuais.',
      subject_hist: 'História',
      subject_hist_desc: 'Linha do tempo interativa e recursos multimídia para melhor compreensão.',
      subject_geo: 'Geografia',
      subject_geo_desc: 'Mapas interativos e recursos visuais para estudo de relevo, clima e sociedade.',
      subject_eng: 'Inglês',
      subject_eng_desc: 'Aprendizado de inglês com ferramentas de pronúncia e vocabulário visual.',
      access_content: 'Acessar conteúdos →',
      
      
      tools_title: 'Ferramentas de Apoio',
      tts_title: 'Leitor de Texto',
      tts_placeholder: 'Cole ou digite o texto aqui...',
      tts_read: 'Ler Texto',
      tts_stop: 'Parar',
      tts_voice: 'Voz:',
      tts_rate: 'Velocidade:',
      calc_title: 'Calculadora Científica',
      calc_clear: 'C',
      resources_title: 'Recursos Especiais',
      resources_item1: 'Conteúdo Multimodal',
      resources_item1_desc: 'Explicações em texto, áudio e vídeo para diferentes estilos de aprendizagem.',
      resources_item2: 'Tempo Flexível',
      resources_item2_desc: 'Estude no seu próprio ritmo sem pressão, com cronômetro de pomodoro opcional.',
      resources_item3: 'Ajustes Personalizados',
      resources_item3_desc: 'Modifique tamanho do texto, cores e layout conforme suas necessidades.',
      contact_title: 'Contato e Suporte',
      contact_intro: 'Tem dúvidas ou sugestões para melhorar nosso portal? Entre em contato!',
      label_name: 'Nome (obrigatório):',
      label_email: 'Email:',
      label_message: 'Mensagem:',
      btn_send: 'Enviar Mensagem',
      ph_name: 'Seu nome',
      ph_email: 'seu@email.com',
      ph_message: 'Escreva sua mensagem...',
      footer_tagline: 'Educação acessível para todos.',
      quick_links: 'Links Rápidos',
      a11y_title: 'Acessibilidade',
      a11y_commit: 'Nosso compromisso é com a inclusão de todos os estudantes.',
      a11y_report_label: 'Relate problemas de acessibilidade:',
      a11y_report_btn: 'Relatar Problema',
      rights_reserved: 'Todos os direitos reservados.',
      // Botões de acessibilidade (estados)
      btn_contrast: 'Alto Contraste',
      btn_contrast_on: 'Normal',
      btn_textsize: 'A+ Texto',
      btn_textsize_1: 'A++ Texto',
      btn_textsize_2: 'A Texto',
      btn_dyslexia: 'Modo Dislexia',
      btn_dyslexia_on: 'Fonte Normal',
      btn_reader: 'Modo Leitura',
      btn_reader_on: 'Modo Normal',
      // Alertas / prompts
      tts_not_supported: 'Seu navegador não suporta leitura de texto. Tente usar Chrome ou Edge.',
      tts_empty: 'Por favor, digite ou cole algum texto para ser lido.',
      contact_thanks: 'Obrigado, {name}! Sua mensagem foi recebida. Responderemos para {email} em breve.',
      a11y_prompt: 'Por favor, descreva o problema de acessibilidade que você encontrou:',
      a11y_thanks: 'Obrigado por relatar! Nossa equipe trabalhará para resolver esse problema.'
    },
    en: {
      skip_to_content: 'Skip to main content',
      site_name: 'EduAccessible',
      nav_home: 'Home',
      nav_subjects: 'Subjects',
      nav_tools: 'Tools',
      nav_resources: 'Resources',
      nav_contact: 'Contact',
      welcome_title: 'Welcome to EduAccessible',
      purpose_title: 'Our Purpose',
      purpose_p1: 'We are high-school students who want to help learners with different needs (physical, visual, hearing, intellectual and psychosocial).',
      purpose_p2: 'Our goal is to provide an accessible, inclusive and effective learning experience for everyone.',
      subjects_title: 'Available Subjects',
      subject_math: 'Mathematics',
      subject_math_desc: 'From basics to advanced, step-by-step explanations and practice exercises.',
      subject_port: 'Portuguese',
      subject_port_desc: 'Grammar, reading comprehension and writing with helpful tools.',
      subject_sci: 'Science',
      subject_sci_desc: 'Biology, Physics and Chemistry with virtual experiments and visual explanations.',
      subject_hist: 'History',
      subject_hist_desc: 'Interactive timeline and multimedia resources for better understanding.',
      subject_geo: 'Geography',
      subject_geo_desc: 'Interactive maps and visuals to study relief, climate and society.',
      subject_eng: 'English',
      subject_eng_desc: 'English learning with pronunciation and visual vocabulary tools.',
      access_content: 'Open content →',
      math_intro: 'Here you will find arithmetic, algebra, geometry and more.',
      math_ex_title: 'Sample Exercise',
      math_ex_q: 'Solve: 12 × (5 + 3) ÷ 4 = ?',
      math_ex_a: '12 × 8 ÷ 4 = 96 ÷ 4 = 24',
      port_intro: 'Grammar, reading comprehension and writing.',
      port_ex_title: 'Sample Exercise',
      port_ex_q: 'Read the sentence: "Students study for the test." — What is the subject?',
      port_ex_a: 'The subject is "Students".',
      sci_intro: 'Studies of biology, chemistry and physics with visual resources.',
      sci_ex_title: 'Virtual Experiment',
      sci_ex_desc: 'Simulate mixing vinegar with baking soda and observe the gas (CO₂) release.',
      hist_intro: 'Interactive timeline and analysis of major events.',
      timeline_title: 'Timeline',
      hist_item1: 'Discovery of Brazil',
      hist_item2: 'Brazilian Independence',
      hist_item3: 'Abolition of Slavery',
      hist_item4: 'Proclamation of the Republic',
      geo_intro: 'Study of maps, climates and human-environment interactions.',
      map_title: 'Interactive Map',
      map_desc: 'Explore the continents and world climates.',
      eng_intro: 'Learning vocabulary, pronunciation and practical conversation.',
      eng_vocab_title: 'Vocabulary',
      eng_cat: 'Cat', eng_dog: 'Dog', eng_house: 'House',
      eng_ex_title: 'Exercise',
      eng_ex_q: 'Translate to English: "Eu tenho um cachorro."',
      eng_ex_a: '"I have a dog."',
      tools_title: 'Support Tools',
      tts_title: 'Text Reader',
      tts_placeholder: 'Paste or type text here...',
      tts_read: 'Read Text',
      tts_stop: 'Stop',
      tts_voice: 'Voice:',
      tts_rate: 'Speed:',
      calc_title: 'Scientific Calculator',
      calc_clear: 'C',
      resources_title: 'Special Resources',
      resources_item1: 'Multimodal Content',
      resources_item1_desc: 'Explanations in text, audio and video for different learning styles.',
      resources_item2: 'Flexible Time',
      resources_item2_desc: 'Study at your own pace with an optional Pomodoro timer.',
      resources_item3: 'Custom Adjustments',
      resources_item3_desc: 'Adjust text size, colors and layout to your needs.',
      contact_title: 'Contact & Support',
      contact_intro: 'Questions or suggestions to improve our portal? Contact us!',
      label_name: 'Name (required):',
      label_email: 'Email:',
      label_message: 'Message:',
      btn_send: 'Send Message',
      ph_name: 'Your name',
      ph_email: 'you@email.com',
      ph_message: 'Write your message...',
      footer_tagline: 'Accessible education for everyone.',
      quick_links: 'Quick Links',
      a11y_title: 'Accessibility',
      a11y_commit: 'Our commitment is to include every student.',
      a11y_report_label: 'Report accessibility issues:',
      a11y_report_btn: 'Report Issue',
      rights_reserved: 'All rights reserved.',
      // Buttons states
      btn_contrast: 'High Contrast',
      btn_contrast_on: 'Normal',
      btn_textsize: 'A+ Text',
      btn_textsize_1: 'A++ Text',
      btn_textsize_2: 'A Text',
      btn_dyslexia: 'Dyslexia Mode',
      btn_dyslexia_on: 'Normal Font',
      btn_reader: 'Reading Mode',
      btn_reader_on: 'Normal Mode',
      // Alerts / prompts
      tts_not_supported: 'Your browser does not support text-to-speech. Try Chrome or Edge.',
      tts_empty: 'Please type or paste some text to read.',
      contact_thanks: 'Thanks, {name}! We will reply to {email} soon.',
      a11y_prompt: 'Please describe the accessibility issue you found:',
      a11y_thanks: 'Thanks for reporting! Our team will work to fix it.'
    }
  };

  function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang] && i18n[lang][key] !== undefined) {
        el.textContent = i18n[lang][key];
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (i18n[lang] && i18n[lang][key] !== undefined) {
        el.setAttribute('placeholder', i18n[lang][key]);
      }
    });

    // Atualizar textos de botões conforme o estado atual
    contrastBtn.textContent = body.classList.contains('high-contrast')
      ? i18n[lang].btn_contrast_on
      : i18n[lang].btn_contrast;

    if (fontSizeLevel === 0) textSizeBtn.textContent = i18n[lang].btn_textsize;
    if (fontSizeLevel === 1) textSizeBtn.textContent = i18n[lang].btn_textsize_1;
    if (fontSizeLevel === 2) textSizeBtn.textContent = i18n[lang].btn_textsize_2;

    dyslexiaBtn.textContent = body.classList.contains('dyslexia-mode')
      ? i18n[lang].btn_dyslexia_on
      : i18n[lang].btn_dyslexia;

    const main = document.querySelector('main');
    readerBtn.textContent = main.classList.contains('reader-mode')
      ? i18n[lang].btn_reader_on
      : i18n[lang].btn_reader;
  }

  // ======= Acessibilidade: Botões =======
  contrastBtn.addEventListener('click', () => {
    body.classList.toggle('high-contrast');
    applyLanguage(currentLang);
  });

  textSizeBtn.addEventListener('click', () => {
    fontSizeLevel = (fontSizeLevel + 1) % 3;
    body.classList.remove('text-xxl', 'text-xxxl');

    if (fontSizeLevel === 1) body.classList.add('text-xxl');
    if (fontSizeLevel === 2) body.classList.add('text-xxxl');

    applyLanguage(currentLang);
  });

  dyslexiaBtn.addEventListener('click', () => {
    body.classList.toggle('dyslexia-mode');
    applyLanguage(currentLang);
  });

  readerBtn.addEventListener('click', () => {
    body.classList.toggle('reader-mode');
    applyLanguage(currentLang);
  });

  languageBtn.addEventListener('click', () => {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    // Mudar atributo lang do HTML
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
    applyLanguage(currentLang);
  });

  // ======= TTS (Leitor de texto) =======
  const textToRead = document.getElementById('text-to-read');
  const readBtn = document.getElementById('read-btn');
  const stopReadBtn = document.getElementById('stop-read-btn');
  const voiceSelect = document.getElementById('voice-select');
  const rate = document.getElementById('rate');
  const rateValue = document.getElementById('rate-value');

  const synth = window.speechSynthesis;
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '';
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      option.value = index;
      voiceSelect.appendChild(option);
    });
    // Selecionar voz em pt por padrão
    const ptVoice = voices.find(v => v.lang.toLowerCase().includes('pt'));
    if (ptVoice) voiceSelect.value = voices.indexOf(ptVoice);
  }

  populateVoiceList();
  if (synth.onvoiceschanged !== undefined) synth.onvoiceschanged = populateVoiceList;

  readBtn.addEventListener('click', () => {
    if (!synth) {
      alert(i18n[currentLang].tts_not_supported);
      return;
    }
    if (synth.speaking) synth.cancel();

    const text = textToRead.value;
    if (!text.trim()) {
      alert(i18n[currentLang].tts_empty);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoiceIndex = parseInt(voiceSelect.value, 10);
    utterance.voice = voices[selectedVoiceIndex];
    utterance.rate = parseFloat(rate.value);
    synth.speak(utterance);
  });

  stopReadBtn.addEventListener('click', () => synth.cancel());
  rate.addEventListener('input', () => rateValue.textContent = rate.value);

  // ======= Calculadora =======
  const calculatorDisplay = document.getElementById('calculator-display');
  const calcButtons = document.querySelectorAll('.calc-btn');

  let currentInput = '0';
  let previousInput = null;
  let operation = null;
  let resetScreen = false;

  function updateDisplay() {
    calculatorDisplay.textContent = currentInput;
  }

  function calculate() {
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result;
    switch (operation) {
      case '+': result = prev + current; break;
      case '-': result = prev - current; break;
      case '×': result = prev * current; break;
      default: return;
    }
    currentInput = result.toString();
    previousInput = null;
    resetScreen = true;
  }

  calcButtons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;
      if (value >= '0' && value <= '9') {
        if (currentInput === '0' || resetScreen) {
          currentInput = value; resetScreen = false;
        } else { currentInput += value; }
      } else if (value === '.') {
        if (!currentInput.includes('.')) currentInput += value;
      } else if (value === i18n[currentLang].calc_clear || value === 'C') {
        currentInput = '0'; previousInput = null; operation = null;
      } else if (value === '=') {
        if (operation && previousInput !== null) { calculate(); operation = null; }
      } else {
        if (previousInput !== null) calculate();
        previousInput = currentInput;
        operation = value; resetScreen = true;
      }
      updateDisplay();
    });
  });

  // ======= Formulário de contato =======
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('message').value;
    const template = i18n[currentLang].contact_thanks;
    const out = template.replace('{name}', name).replace('{email}', email);
    alert(out);
    contactForm.reset();
  });

  // ======= Reportar A11y =======
  reportA11yBtn.addEventListener('click', () => {
    const problem = prompt(i18n[currentLang].a11y_prompt);
    if (problem) alert(i18n[currentLang].a11y_thanks);
  });

  // ======= Navegação por teclado/mouse =======
  document.addEventListener('keydown', () => document.body.setAttribute('data-whatintent', 'keyboard'));
  document.addEventListener('mousedown', () => document.body.setAttribute('data-whatintent', 'mouse'));

  // Aplicar idioma inicial
  applyLanguage(currentLang);
});
