#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Gerador de PDF para Termo de Saida do Organizador EstaHack
"""

from fpdf import FPDF
from datetime import datetime

class TermoSaidaPDF(FPDF):
    def header(self):
        self.set_font('helvetica', 'B', 14)
        self.cell(0, 10, 'TERMO DE DESLIGAMENTO E DECLARACAO', 0, 1, 'C')
        self.set_font('helvetica', '', 10)
        self.cell(0, 5, 'Projeto EstaHack - Hackathon nas Escolas Publicas', 0, 1, 'C')
        self.ln(5)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(5)

    def footer(self):
        self.set_y(-15)
        self.set_font('helvetica', 'I', 8)
        self.cell(0, 10, f'Pagina {self.page_no()}', 0, 0, 'C')

def criar_termo_saida():
    pdf = TermoSaidaPDF()
    pdf.add_page()
    pdf.set_auto_page_break(auto=True, margin=15)
    
    data_atual = datetime.now().strftime('%d/%m/%Y')
    
    pdf.set_font('helvetica', 'B', 12)
    pdf.cell(0, 10, 'TERMO DE DESLIGAMENTO DO ORGANIZADOR FUNDADOR', 0, 1, 'C')
    pdf.ln(5)
    
    pdf.set_font('helvetica', '', 10)
    texto_intro = (
        f"Eu, RENAN BEZERRA SANTOS, professor da rede estadual de ensino de Sao Paulo, "
        f"portador do e-mail profissional renansantos01@prof.educacao.sp.gov.br, "
        f"venho por meio deste documento formalizar meu DESLIGAMENTO do projeto EstaHack, "
        f"do qual fui organizador fundador, em data de {data_atual}."
    )
    pdf.multi_cell(0, 6, texto_intro)
    pdf.ln(5)
    
    pdf.set_font('helvetica', 'B', 11)
    pdf.cell(0, 8, '1. COMPROVACAO DE ORGANIZADOR FUNDADOR', 0, 1, 'L')
    pdf.ln(2)
    
    pdf.set_font('helvetica', '', 10)
    texto_org = (
        "Declaro que participei ativamente como organizador fundador do projeto EstaHack, "
        "conforme comprovacao atraves dos registros no repositorio oficial do GitHub "
        "(https://github.com/renan-b-eth/Hackhton-Escola-Publica), com os seguintes commits:"
    )
    pdf.multi_cell(0, 6, texto_org)
    pdf.ln(2)
    
    pdf.set_font('Courier', '', 9)
    commits = [
        "5ce0bf7 - feat: remove dados pessoais, fotos e parcerias conforme solicitado",
        "0a46ee5 - instalado o ssl",
        "fa0deda - melhorado",
        "ee428c6 - Fix build error: import Trophy and remove unused imports",
        "15eef01 - Ajuste de design, correcao de dados e datas (2026)",
        "953af1d - feat: add metodologia and regulamento sections",
        "bfdb726 - feat: add school logo, estahack banner and sponsors",
        "93e08dd - feat: improve hero with estahack logo in title",
        "118108b - feat: add metodologia and regulamento sections",
    ]
    for commit in commits:
        pdf.cell(5, 5, '', 0, 0)
        pdf.cell(0, 5, f'- {commit}', 0, 1)
    pdf.ln(3)
    
    pdf.set_font('helvetica', 'I', 9)
    pdf.cell(5, 5, '', 0, 0)
    pdf.cell(0, 5, '(Historico completo disponivel em: https://github.com/renan-b-eth/Hackhton-Escola-Publica/commits/main/)', 0, 1)
    pdf.ln(5)
    
    pdf.set_font('helvetica', 'B', 11)
    pdf.cell(0, 8, '2. MOTIVO DO DESLIGAMENTO', 0, 1, 'L')
    pdf.ln(2)
    
    pdf.set_font('helvetica', '', 10)
    texto_motivo = (
        "O desligamento deve-se a mudanca de direcionamento do projeto por parte da organizacao, "
        "que foi desviado de seu proposito original pedagogico-educacional para fins comerciais, "
        "em desacordo com os principios eticos e legais que norteiam a educacao publica."
    )
    pdf.multi_cell(0, 6, texto_motivo)
    pdf.ln(3)
    
    pdf.set_font('helvetica', 'B', 11)
    pdf.cell(0, 8, '3. FUNDAMENTACAO LEGAL', 0, 1, 'L')
    pdf.ln(2)
    
    pdf.set_font('helvetica', '', 10)
    fundamentacao = (
        "O desligamento fundamenta-se nos seguintes dispositivos legais, uma vez que o projeto "
        "foi desviado de sua natureza pedagogica para fins comerciais:"
    )
    pdf.multi_cell(0, 6, fundamentacao)
    pdf.ln(3)
    
    pdf.set_font('helvetica', 'B', 10)
    pdf.cell(0, 6, '3.1. Estatuto da Crianca e do Adolescente (ECA) - Lei 8.069/1990:', 0, 1, 'L')
    pdf.set_font('helvetica', '', 10)
    pdf.cell(5, 5, '', 0, 0)
    pdf.multi_cell(0, 6, 'Art. 60: A crianca e o adolescente tem direito a educacao, visando ao pleno desenvolvimento de sua pessoa, incluindo o respeito aos seus direitos fundamentais e liberdades.')
    pdf.ln(2)
    
    pdf.set_font('helvetica', 'B', 10)
    pdf.cell(0, 6, '3.2. Codigo Civil Brasileiro - Lei 10.406/2002:', 0, 1, 'L')
    pdf.set_font('helvetica', '', 10)
    pdf.cell(5, 5, '', 0, 0)
    pdf.multi_cell(0, 6, 'Art. 3º: Toda pessoa e capaz de direitos e deveres na ordem civil.')
    pdf.cell(5, 5, '', 0, 0)
    pdf.multi_cell(0, 6, 'Art. 4º: A capacidade da pessoa natural começa ao nascimento com vida; mas a lei põe a salvo, desde a concepção, os direitos do nascituro.')
    pdf.cell(5, 5, '', 0, 0)
    pdf.multi_cell(0, 6, 'Art. 884: Ocorre a resolução do contrato quando, por motivo imprevisível e de força maior, as obrigações de uma das partes se tornarem excessivamente onerosas.')
    pdf.ln(2)
    
    pdf.set_font('helvetica', 'B', 10)
    pdf.cell(0, 6, '3.3. Lei Geral de Protecao de Dados (LGPD) - Lei 13.709/2018:', 0, 1, 'L')
    pdf.set_font('helvetica', '', 10)
    pdf.cell(5, 5, '', 0, 0)
    pdf.multi_cell(0, 6, 'Art. 22: O tratamento de dados pessoais de crianças e adolescentes deve ser realizado em seu interesse superior.')
    pdf.cell(5, 5, '', 0, 0)
    pdf.multi_cell(0, 6, 'Art. 24: O controlador deve adotar medidas para garantir a transparência do tratamento de dados pessoais.')
    pdf.ln(5)
    
    pdf.set_font('helvetica', 'B', 11)
    pdf.cell(0, 8, '4. NOVO PROJETO PEDAGOGICO', 0, 1, 'L')
    pdf.ln(2)
    
    pdf.set_font('helvetica', '', 10)
    texto_novo = (
        "Informo que sera desenvolvido um NOVO PROJETO com NOVA DENOMINACAO, mantendo o caracter "
        "exclusivamente pedagogico-educacional, conforme previsto na legislacao vigente."
    )
    pdf.multi_cell(0, 6, texto_novo)
    pdf.ln(3)
    
    pdf.set_font('helvetica', 'B', 10)
    pdf.cell(0, 6, '4.1. Caracteristicas do Novo Projeto:', 0, 1, 'L')
    pdf.ln(2)
    
    pdf.set_font('helvetica', '', 10)
    detalhes = [
        ('Escola Sede/Pioneira:', 'E.E. Nancy de Oliveira Fidalgo'),
        ('Vinculacao:', 'Diretoria de Ensino Leste 2 - SEDUC/SP'),
        ('Apresentacao:', 'Exclusiva para URE Leste 2'),
        ('Data do Evento:', '29 de maio de 2026'),
        ('Natureza:', 'Projeto exclusivamente pedagogico-educacional'),
        ('Publico:', 'Estudantes da rede estadual de ensino'),
    ]
    
    for label, valor in detalhes:
        pdf.cell(50, 6, f'{label}', 0, 0)
        pdf.set_font('helvetica', 'B', 10)
        pdf.cell(0, 6, f'{valor}', 0, 1)
        pdf.set_font('helvetica', '', 10)
    
    pdf.ln(5)
    
    pdf.set_font('helvetica', 'B', 11)
    pdf.cell(0, 8, '5. DECLARACOES FINAIS', 0, 1, 'L')
    pdf.ln(2)
    
    pdf.set_font('helvetica', '', 10)
    declaracoes = (
        "Declaro que:\n\n"
        "a) Estou ciente de que meu desligamento do projeto EstaHack se da por motivos de ordem "
        "etica e legal, em defesa da natureza pedagogica do projeto;\n\n"
        "b) O novo projeto sera desenvolvido em estrita conformidade com a legislacao educacional, "
        "mantendo o caracter exclusivamente pedagogico;\n\n"
        "c) A E.E. Nancy de Oliveira Fidalgo, atraves de sua direcao e coordenacao pedagogica, "
        "apoiara o novo projeto na URE Leste 2;\n\n"
        "d) Solicito que este termo seja anexado aos registros oficiais do projeto."
    )
    pdf.multi_cell(0, 6, declaracoes)
    pdf.ln(8)
    
    pdf.set_font('helvetica', 'B', 10)
    pdf.cell(0, 8, 'ASSINATURAS:', 0, 1, 'L')
    pdf.ln(5)
    
    pdf.set_font('helvetica', '', 10)
    pdf.cell(95, 6, '_____________________________________', 0, 0, 'C')
    pdf.cell(0, 6, '_____________________________________', 0, 1, 'C')
    pdf.cell(95, 6, 'RENAN BEZERRA SANTOS', 0, 0, 'C')
    pdf.cell(0, 6, 'COORDENADOR PEDAGOGICO', 0, 1, 'C')
    pdf.cell(95, 5, 'Organizador Fundador', 0, 0, 'C')
    pdf.cell(0, 5, 'E.E. Nancy de Oliveira Fidalgo', 0, 1, 'C')
    pdf.ln(5)
    
    pdf.cell(0, 6, f'Sao Paulo, {data_atual}', 0, 1, 'R')
    
    pdf.output('/home/renan/Documentos/Hackhton-Escola-Publica/Termo_Desligamento_Renan_Bezerra.pdf')
    print('PDF gerado com sucesso!')

if __name__ == '__main__':
    criar_termo_saida()
