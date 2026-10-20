---
layout: homepage
permalink: /
title: "About Me"
intro: >-
  I am a Ph.D. student in the Computer Science department at the University of California, Santa Barbara. I am advised by [Prof. Tim Sherwood](https://www.arch.cs.ucsb.edu/prof-sherwood) and [Prof. Jonathan Balkind](https://jbalkind.github.io/). My interdisciplinary research spans Computer Architecture, Machine Learning, Sustainable Systems and Responsible Computing.

  I completed my undergraduate studies at the Indian Institute of Technology (IIT) Gandhinagar, where I earned a B.Tech. degree with Honors in Computer Science and Engineering.
redirect_from:
  - /about/
  - /about.html
---

<section class="scroll-section" id="news" aria-labelledby="news-heading">
<h2 id="news-heading">News</h2>
<span id="awards" class="section-anchor" aria-hidden="true"></span>
<p class="section-intro">Awards, honors, and research in the news.</p>
<ol class="news-list">
{% for item in site.data.news %}
  <li class="news-item">
    <span class="news-date"><time datetime="{{ item.date | date: '%Y-%m' }}">{{ item.date | date: '%B %Y' }}</time>{% if item.end_date %} – <time datetime="{{ item.end_date | date: '%Y-%m' }}">{{ item.end_date | date: '%B %Y' }}</time>{% endif %}</span>
    <p>{% if item.url %}<a href="{{ item.url }}">{{ item.title | escape }}</a>{% else %}{{ item.title | escape }}{% endif %}</p>
  </li>
{% endfor %}
</ol>
</section>

<section class="scroll-section" id="education" aria-labelledby="education-heading">
<h2 id="education-heading">Education</h2>
<div class="education-entry">
  <p><strong>University of California, Santa Barbara (UCSB)</strong> — Santa Barbara, CA<br />
  <em>Ph.D., Computer Science</em><br />Expected graduation: August 2027 · GPA: 4.0/4.0</p>
  <span class="education-entry__period">September 2023 – Present</span>
</div>
<div class="education-entry">
  <p><strong>University of California, Santa Barbara (UCSB)</strong> — Santa Barbara, CA<br />
  <em>Master of Science (M.S.), Computer Science</em><br />GPA: 4.0/4.0</p>
  <span class="education-entry__period">September 2021 – September 2023</span>
</div>
<div class="education-entry">
  <p><strong>Indian Institute of Technology (IIT), Gandhinagar</strong> — Gandhinagar, India<br />
  <em>Bachelor of Technology (B.Tech.) with Honors, Computer Science and Engineering</em><br />GPA: 8.55/10.0</p>
  <span class="education-entry__period">July 2016 – August 2020</span>
</div>
</section>

<section class="scroll-section" id="experience" aria-labelledby="experience-heading">
<h2 id="experience-heading">Experience</h2>
<div class="resume-timeline">
{% for role in site.data.experience %}
<article class="resume-entry">
  <div class="resume-entry__heading">
    <h3>{{ role.title }}</h3>
    <span class="resume-entry__period">{{ role.period }}</span>
  </div>
  <p class="resume-entry__meta"><strong>{{ role.organization }}</strong>, {{ role.location }}</p>
  <p class="resume-entry__mentor"><strong>{{ role.mentor_label | default: "Mentor" }}:</strong> {{ role.mentor }}</p>
  <ul>
    {% for responsibility in role.responsibilities %}<li>{{ responsibility }}</li>{% endfor %}
  </ul>
</article>
{% endfor %}
</div>
</section>

<section class="scroll-section" id="publications" aria-labelledby="publications-heading">
<h2 id="publications-heading">Publications</h2>
{% include cv-publications.html %}
<p class="publication-footnote">* indicates equal contribution.</p>
</section>

<section class="scroll-section" id="research-projects" aria-labelledby="research-projects-heading">
<h2 id="research-projects-heading">Research Projects</h2>
<div class="resume-timeline">
{% for project in site.data.projects %}
<article class="resume-entry">
  <div class="resume-entry__heading"><h3>{{ project.title }}</h3><span class="resume-entry__period">{{ project.period }}</span></div>
  <p class="resume-entry__meta">{{ project.tools }}</p>
  <p class="resume-entry__mentor"><strong>Advisor:</strong> {{ project.advisor }}{% if project.collaboration %}<br /><strong>Collaboration:</strong> {{ project.collaboration }}{% endif %}</p>
  <ul>{% for responsibility in project.responsibilities %}<li>{{ responsibility }}</li>{% endfor %}</ul>
</article>
{% endfor %}
</div>
</section>

<section class="scroll-section" id="skills-and-certificates" aria-labelledby="skills-heading">
<h2 id="skills-heading">Skills and Certificates</h2>
<ul class="skills-list">
  <li><strong>Languages:</strong> Python, C/C++, SQL, Shell scripting, C#, HTML/CSS, Ruby (Rails), Assembly Languages [MIPS]</li>
  <li><strong>Frameworks/Tools:</strong> Git, LaTeX, Python Data Science Stack, System Simulators [gem5, SniperSim], VS Code</li>
  <li><strong>Certificate in Inclusive Teaching</strong>, UCSB — June 2025</li>
  <li><strong>Graduate Student Mentor Training Course</strong>, Computing Research Association (CRA) — December 2025</li>
</ul>
</section>

<section class="scroll-section" id="teaching-and-mentoring-experience" aria-labelledby="teaching-heading">
<h2 id="teaching-heading">Teaching and Mentoring Experience</h2>
{% include cv-teaching.html %}
</section>

<section class="scroll-section" id="professional-service" aria-labelledby="professional-service-heading">
<h2 id="professional-service-heading">Professional Service</h2>
<ul class="dated-list">
{% for item in site.data.service %}
  <li><div><strong>{{ item.title }}</strong>, {{ item.organization }}</div><span>{{ item.period }}</span></li>
{% endfor %}
</ul>
</section>

<section class="scroll-section" id="outreach" aria-labelledby="outreach-heading">
<h2 id="outreach-heading">Outreach</h2>
<ul class="dated-list">
{% for item in site.data.outreach %}
  <li><div><strong>{{ item.title }}</strong>, {{ item.organization }}</div><span>{{ item.period }}</span></li>
{% endfor %}
</ul>
</section>

<section class="scroll-section" id="miscellaneous" aria-labelledby="miscellaneous-heading">
<h2 id="miscellaneous-heading">Miscellaneous</h2>
<p class="section-intro">A few paintings made away from the computer.</p>
<div class="painting-gallery">
  <figure class="painting-card"><img src="{{ '/images/paintings/painting1.jpg' | relative_url }}" alt="Sunflower painting in warm colors" loading="lazy" /><figcaption>Sunlit Bloom</figcaption></figure>
  <figure class="painting-card"><img src="{{ '/images/paintings/painting2.jpg' | relative_url }}" alt="Folk-style portrait of a woman beside a horse" loading="lazy" /><figcaption>Rider in Red</figcaption></figure>
  <figure class="painting-card"><img src="{{ '/images/paintings/painting3.jpg' | relative_url }}" alt="Tree silhouetted against a golden sunset" loading="lazy" /><figcaption>Golden Hour</figcaption></figure>
  <figure class="painting-card"><img src="{{ '/images/paintings/painting4.jpg' | relative_url }}" alt="Colorful flowers in a vase" loading="lazy" /><figcaption>Flowers at Dusk</figcaption></figure>
  <figure class="painting-card"><img src="{{ '/images/paintings/painting5.jpg' | relative_url }}" alt="Pastel flowers arranged in a pot" loading="lazy" /><figcaption>Pansies in Bloom</figcaption></figure>
</div>
</section>
