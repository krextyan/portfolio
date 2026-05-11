---
title: "Week 6 — Flutter Bug Fixes, Supabase Integration, and Authentication Improvements"
date: "2026-03-19"
---

This week focused on resolving Flutter application issues, improving backend storage integration, and enhancing authentication and attendance tracking features within the Workforce Accountability system.

## What I Worked On

**Flutter bug fixes and version control issues.**  
Resolved bugs in the Flutter application caused by GitHub merge conflicts. Ensured stable project synchronization after resolving conflicting changes.

**Supabase and Firebase integration.**  
Integrated Supabase storage for employee profile images, replacing the previous Firebase-only approach. This improved flexibility in handling media storage.

Successfully implemented a hybrid data flow where Supabase image URLs are stored in Firebase, allowing Flutter to access and display profile images efficiently.

**Authentication and session management.**  
Developed an authentication checker to prevent repeated login sessions when reopening the app, improving user experience and session stability.

**Attendance and notification system.**  
Integrated a system to track and display employee late hours through notifications, improving transparency in attendance monitoring.

**Ongoing development work.**  
Continued working on project development tasks and system improvements.

## What I Learned

- Handling merge conflicts is a critical part of real-world team development workflows  
- Combining multiple backend services (Supabase + Firebase) can improve system flexibility but requires careful data flow design  
- Session persistence is essential for smooth mobile app user experience  
- Attendance systems benefit from real-time notification and tracking features  

## Next Week

- Improve stability of Flutter + backend integration  
- Refine authentication flow and session handling  
- Enhance notification system accuracy and responsiveness  