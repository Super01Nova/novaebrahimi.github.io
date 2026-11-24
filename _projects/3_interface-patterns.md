---
layout: page
title: "Same Actions, Different Signals:  Virtual World Design Patterns"
description: AI-assisted comparative interface analysis using a vision-language model, clustering, and expert review
img: assets/img/case-studies/p3-thumb.png
importance: 3
category: UX research
toc:
  sidebar: left
---


| | |
|---|---|
| **My role** | Researcher and pipeline engineer (solo): study design, screen capture, extraction schema, ML pipeline, analysis, pattern review |{% comment %}
| **Timeline** | 2025 to 2026 |{% endcomment %}
| **Methods** | Comparative interface analysis, AI-assisted element extraction, clustering with stability testing, expert review |
| **Tools** | Python, Qwen2.5-VL-72B, HDBSCAN, SLURM on a university GPU cluster |
| **Outputs** | 35 interface pattern candidates, a repeatable analysis procedure, a 103-pattern catalog combined with my user research |

## Overview

My [educator interviews]({{ '/projects/1_educator-interviews/' | relative_url }}) and [student focus groups]({{ '/projects/2_student-focus-groups/' | relative_url }}) told me what people said about virtual world interfaces. This project looked at what the platforms actually ship. I analyzed the interfaces of seven competing platforms, used a vision-language model to inventory every interface element on thousands of screens, and combined clustering with my own review to find the design patterns that recur across products.

**Platforms analyzed:** Second Life, Gather.Town, VRChat, Spatial, Virbela, Minecraft Education, Roblox

{% include figure.liquid loading="eager" path="assets/img/case-studies/p3-hero.png" title="Analysis pipeline" class="img-fluid rounded z-depth-1" %}
<div class="caption">
  The analysis pipeline, from screen capture to reviewed pattern candidates.
</div>

## The problem

Interface pattern libraries cover web and mobile apps, but none describe the layer between a user and a 3D world: the menus, panels, and buttons that let you move your avatar, find people, and act on the place around you. Manual pattern work also has a ceiling, since one person can only review so many screens. I wanted an analysis large enough to tell real conventions apart from one company's quirks.

## Research questions

1. Which interface actions recur across platforms, beyond those every desktop or web app provides?
2. How do the interfaces arrange those actions in relation to the world on screen?
3. Which parts of the learning experience (presence, place, community) do they address?

## Approach

### 1. Capture

I walked through each interface one element at a time, opening every menu item down to its deepest screen before returning, so each sequence shows an item with all its child pages and states. This produced a corpus of several thousand screenshots captured in late 2025.

### 2. Extract

I wrote a structured schema and ran Qwen2.5-VL-72B on the university's GPU cluster to inventory every visible element on 2,745 screenshots, recording what each element shows (the signifier) and the action it offers (the affordance).

### 3. Cluster and test stability

A density-based clustering method (HDBSCAN) grouped similar element records and set aside noise. I then resampled the data and kept only the groups that held up, so a pattern could not rest on a lucky draw.

### 4. Human review

I checked every stable group against its source screenshots before naming any pattern. The model extracted; I identified.

{% include figure.liquid path="assets/img/case-studies/p3-evidence-matrix.png" title="Pattern candidates by platform" class="img-fluid rounded z-depth-1" %}
<div class="caption">
  Each pattern candidate and the platforms it appears on. Larger markers mean more screenshots show the pattern.
</div>

### Engineering challenges

- **Output truncation.** Early runs cut off long element lists because of how the token budget was calculated. I traced the cause and replaced it with a fixed ceiling, then reran the affected data.
- **Reproducibility.** I discarded pilot runs and analyzed only a single final run, and tracked which code version produced each output.
- **Uneven data.** Some platforms have far more screens than others, so I also analyzed groups within each platform to keep the largest ones from dominating.

## Key findings

**Much of the interface is ordinary app UI.** About two fifths of the stable groups were standard actions such as signing in, closing a window, or going back. I had expected that share to be a majority, and it was not.

**The distinctive part centers on people and place.** What remains is specific to virtual worlds: controlling your own avatar, seeing and reaching the other people present, and acting on the place.

**Same actions, different signals.** Competing products offer the same avatar, social, and place actions, but present them with different icons, labels, and layouts. A student switching platforms meets familiar actions in unfamiliar forms, which points to a clear opportunity for shared conventions.

**Keep the world in view.** The four layouts that recur share one concern. Tasks open as overlays on top of the live world, and actions on the world sit at the edge of the viewport, so users can pick an object, a gesture, or a destination without losing sight of the place and the people in it.

## Outcome

- **35 interface pattern candidates**, 24 of them recurring across more than one platform
- **Cross-checked against my user research:** 6 matched designs that educators or students had already described, 21 gave the interface answer to a need those studies raised, and 8 addressed needs no participant mentioned
- **A repeatable analysis procedure** that draws pattern evidence from a corpus anyone can check, instead of from the examples one designer happens to know
- **A combined catalog of 103 design patterns** that merges these candidates with those from my educator and student studies

## Reflection

The procedure is strongest when a single screenshot carries the evidence: whether an element is present and what it signals. It is weaker for anything that spans screens, such as navigation flows and how the interface and the world respond to each other. Capturing those would need screen recordings of real use, which is the next step I would add.

Looking further ahead, I see the pattern catalog as the knowledge base for an AI co-design assistant that helps educators build and adjust virtual learning spaces without hiring a designer.

**Related case studies:** [Why Copied Classrooms Sit Empty: Lessons from Expert Educators]({{ '/projects/1_educator-interviews/' | relative_url }}) · [Virtual Worlds or Video Calls? It Depends on the Activity]({{ '/projects/2_student-focus-groups/' | relative_url }})
