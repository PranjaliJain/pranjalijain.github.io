---
layout: homepage
permalink: /
title: "About Me"
intro: >-
  I am a Ph.D. student in the Computer Science department at the University of California, Santa Barbara. I am advised by [Prof. Tim Sherwood](https://www.arch.cs.ucsb.edu/prof-sherwood) and [Prof. Jonathan Balkind](https://jbalkind.github.io/). My interdisciplinary research spans Computer Architecture, Machine Learning, Sustainable Systems and Responsible Computing.

  I completed my undergraduate studies at the Indian Institute of Technology (IIT) Gandhinagar, where I earned a B.Tech. degree in Computer Science and Engineering.
redirect_from:
  - /about/
  - /about.html
---

<section class="scroll-section" id="education" aria-labelledby="education-heading">
<h2 id="education-heading">Education</h2>
<div class="education-entry">
  <p><strong>University of California, Santa Barbara (UCSB)</strong> — Santa Barbara, CA<br />
  <em>Ph.D., Computer Science</em> · Expected October 2027 · GPA: 4.0/4.0<br />
  September 2021 – Present</p>
</div>
<div class="education-entry">
  <p><strong>Indian Institute of Technology (IIT), Gandhinagar</strong> — Gandhinagar, India<br />
  <em>Bachelor of Technology (Honors), Computer Science and Engineering</em> · GPA: 8.55/10.0<br />
  July 2016 – August 2020</p>
</div>
</section>

<section class="scroll-section" id="awards" aria-labelledby="awards-heading">
<h2 id="awards-heading">Awards</h2>
<ul class="awards-list">
  <li><strong>UCSB CS Outstanding PhD Student of the Year 2026 Awardee</strong> <span>June 2026</span></li>
  <li><strong>Travel Grant to attend ASPLOS 2026</strong> <span>March 2026</span></li>
  <li><strong>Distinguished Artifact Award, IISWC 2025</strong> <span>October 2025</span></li>
  <li><strong>Best Paper Nomination, IISWC 2025</strong> <span>October 2025</span></li>
  <li><strong>National Science Foundation (NSF) Grant for Sustainable Computer System Design</strong> <span>June 2025</span></li>
  <li><strong>IBM PhD Fellowship 2024–2025 Awardee</strong> <span>January 2025</span></li>
  <li><strong>Qualcomm Innovation Fellowship 2025 Finalist</strong> <span>January 2025</span></li>
  <li><strong>Socio-Environmental Knowledge (SEEK) Commons Fellowship 2025 Finalist</strong> <span>January 2025</span></li>
  <li><strong>Travel Grants to attend ASPLOS 2024, ECIR 2020, and CoDS-COMAD 2020</strong> <span>March 2024, September 2019</span></li>
  <li><strong>Dean’s List for Academic Excellence, IIT Gandhinagar</strong> <span>January 2017 – December 2019</span></li>
  <li><strong>Durga Devi Sultania Scholarship, IIT Gandhinagar</strong> <span>April 2019</span></li>
  <li><strong>Top 3 Best Papers for AgriBot at ICSTEM 2019 (among 300+ papers)</strong> <span>January 2019</span></li>
  <li><strong>Gujarat government cash prize for Social Good through CS research (Rs. 25,000)</strong> <span>January 2019</span></li>
  <li><strong>Explorer Fellowship, IIT Gandhinagar (Rs. 36,000)</strong> <span>April 2017</span></li>
  <li><strong>Bachelor of Arts degree in Indian Classical Music</strong> <span>August 2014</span></li>
</ul>
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
  <p class="resume-entry__mentor"><strong>Mentor:</strong> {{ role.mentor }}</p>
  <ul>
    {% for responsibility in role.responsibilities %}<li>{{ responsibility }}</li>{% endfor %}
  </ul>
</article>
{% endfor %}
</div>
</section>

<section class="scroll-section" id="publications" aria-labelledby="publications-heading">
<h2 id="publications-heading">Publications</h2>
{% assign publication_categories = "under_submission,journal,conference,workshop" | split: "," %}
{% for category in publication_categories %}
  {% assign category_publications = site.data.publications | where: "category", category %}
  {% if category_publications.size > 0 %}
    {% case category %}
      {% when "under_submission" %}{% assign category_title = "Under Submission" %}
      {% when "journal" %}{% assign category_title = "Journal Papers" %}
      {% when "conference" %}{% assign category_title = "Conference Papers" %}
      {% when "workshop" %}{% assign category_title = "Workshop Papers" %}
    {% endcase %}
<h3 class="publication-category__title">{{ category_title }}</h3>
    {% for publication in category_publications %}
      {% capture highlighted_author %}<strong class="publication-author-self">Pranjali Jain</strong>{% endcapture %}
      {% assign authors_display = publication.authors | replace: "Pranjali Jain", highlighted_author %}
      {% assign venue_display = publication.venue %}
      {% for venue_highlight in publication.venue_highlights %}
        {% capture highlighted_venue %}<strong class="publication-venue-highlight">{{ venue_highlight }}</strong>{% endcapture %}
        {% assign venue_display = venue_display | replace: venue_highlight, highlighted_venue %}
      {% endfor %}
<article class="publication-entry">
  <h4>{{ publication.title }}{% include publication-links.html publication=publication %}</h4>
  <p class="publication-authors">{{ authors_display }}</p>
  <p class="publication-venue">{% if publication.status %}<em>{{ publication.status }}</em>{% else %}{{ venue_display }}{% endif %}</p>
  {% if publication.note %}<p class="publication-note">{{ publication.note }}</p>{% endif %}
</article>
    {% endfor %}
  {% endif %}
{% endfor %}
<p class="publication-footnote">* indicates equal contribution.</p>
</section>

<section class="scroll-section" id="research-projects" aria-labelledby="research-projects-heading">
<h2 id="research-projects-heading">Research Projects</h2>
</section>

<section class="scroll-section" id="teaching-and-mentoring-experience" aria-labelledby="teaching-heading">
<h2 id="teaching-heading">Teaching and Mentoring Experience</h2>
<div class="resume-timeline">
{% for role in site.data.teaching %}
<article class="resume-entry">
  <div class="resume-entry__heading">
    <h3>{{ role.title }}</h3>
    <span class="resume-entry__period">{{ role.period }}</span>
  </div>
  <p class="resume-entry__meta"><strong>{{ role.organization }}</strong>{% if role.location %}, {{ role.location }}{% endif %}</p>
  {% if role.responsibilities %}
  <ul>
    {% for responsibility in role.responsibilities %}<li>{{ responsibility }}</li>{% endfor %}
  </ul>
  {% endif %}
  {% if role.courses %}
  <ul class="resume-entry__courses">
    {% for course in role.courses %}<li>{{ course }}</li>{% endfor %}
  </ul>
  {% endif %}
</article>
{% endfor %}
</div>
</section>

<section class="scroll-section" id="miscellaneous" aria-labelledby="miscellaneous-heading">
<h2 id="miscellaneous-heading">Miscellaneous</h2>
</section>
