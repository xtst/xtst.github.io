---
layout: academic_home
title: about
permalink: /
subtitle: PhD Student at SJTU IPADS

profile:
  align: left
  image: prof_pic.png
  image_circular: true # crops the image to make it circular
  contact: xin_tong (AT) sjtu (dot) edu (dot) cn
  more_info: >
    <p>Institute of Parallel and Distributed Systems (并行与分布式系统研究所, IPADS)</p>
    <p>Shanghai Jiao Tong University (上海交通大学, SJTU)</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

awards:
  enabled: true
  limit: 4

internships:
  - organization: Qingyun Program (青云计划), Tencent Hunyuan Foundation Models (腾讯混元基础模型)
    role: Research Intern
    period: 2026 – Present
    description: Research on training–inference consistency for large-scale LLM reinforcement learning.

presentations:
  - datetime: "2026-07-30"
    date: "July 30, 2026"
    kind: Research Talk
    venue: "Huawei 2012 Laboratories · Kernel & OS Lab"
    title: "端侧 LLM 推理中的内存带宽争用治理：Sereno 系统的设计与实践"
    lang: zh-CN
    description: A talk on the design and practice of Sereno for managing memory-bandwidth contention in on-device LLM inference.
    paper_title: "Inference in the Shadows: Taming Memory Bandwidth Contention in Mobile LLM Inference with Sereno"
    url: https://www.usenix.org/conference/osdi26/presentation/xin
  - datetime: "2026-07-14"
    date: "July 14, 2026"
    kind: Conference Oral
    venue: "OSDI '26 · Seattle, WA"
    title: "Inference in the Shadows: Taming Memory Bandwidth Contention in Mobile LLM Inference with Sereno"
    description: Oral presentation at the 20th USENIX Symposium on Operating Systems Design and Implementation.
    link_label: Presentation page
    url: https://www.usenix.org/conference/osdi26/presentation/xin

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts

miscellaneous:
  - I enjoy badminton and compete as a member of the SJTU Badminton Team. I also captain the Badminton Team of SEIEE at SJTU.
---

<section class="research-focus" aria-labelledby="research-focus-heading">
  <h2 id="research-focus-heading" class="research-label">Research Focus</h2>
  <p class="research-intro">My research sits at the intersection of AI and systems. I primarily focus on two complementary directions:</p>
  <div class="research-grid">
    <article class="research-card">
      <span class="research-number" aria-hidden="true">01</span>
      <h3>Systems for AI workloads</h3>
      <p>Efficient infrastructure for AI workloads, from on-device inference with Sereno to large-scale LLM reinforcement learning with UniExact.</p>
    </article>
    <article class="research-card">
      <span class="research-number" aria-hidden="true">02</span>
      <h3>Systems where AI is the author</h3>
      <p>Correctness and long-term maintenance when AI writes system artifacts, from LLM-derived knowledge with LLMake to file-system code with FSCrash.</p>
    </article>
  </div>
</section>

I am a PhD student at the **Institute of Parallel and Distributed Systems
(并行与分布式系统研究所, IPADS)**, **Shanghai Jiao Tong University (上海交通大学,
SJTU)**, advised by
[Haibo Chen (陈海波)](https://ipads.se.sjtu.edu.cn/pub/members/haibo_chen) and
[Mingkai Dong (董明凯)](https://dong.mk/). I received my B.Eng. degree in
Information Engineering from SJTU in 2025.

Across both directions, I work at the intersection of **ML systems** and
**operating systems**, with an emphasis on dependable, efficient, and deployable
systems.
