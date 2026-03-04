import React from 'react';
import { ImageBlock, CodeBlock } from '@/components/ui/CourseContent';
import { Content } from 'next/font/google';

export const babInfo = [
  {
    title: 'Website Development',
    subtitle: 'Website Development',
    topics: [
      {
        label: 'Introduction',
        topicLink: "https://weboctary.hashnode.space/default-guide/fundamental/introduction",
        content: (
          <div className="space-y-6">
            <ImageBlock
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1752929804497/0527bc04-d122-433d-bce7-8a2eb5abc905.png?auto=compress,format&format=webp&q=75"
              alt="HTML Structure Illustration"
            />
            <h4 className="text-lg font-semibold text-cyan-400 mb-3">Pengenalan HTML, CSS, dan JavaScript untuk Pemula</h4>
            <p className="text-slate-400 leading-relaxed">
              Mungkin kamu sering dengar istilah HTML, CSS, JavaScript, tapi bingung itu apa? Atau mungkin kamu belum pernah coding sama sekali? Tenang saja! Kamu berada di tempat yang tepat.
            </p>

            <div>
              <p className="text-slate-400 leading-relaxed">
                Bayangkan website itu seperti sebuah buku digital yang bisa kamu baca di komputer atau handphone. Buku itu punya:
              </p>
              <ul className="space-y-2 text-slate-400 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Cover dan Tata Letak Indah: Gimana sih tulisannya bisa warna-warni, gambar bisa di tengah, atau halaman bisa rapi?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Isi Buku: Tulisan, gambar, video, dan semua informasi yang kamu lihat.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Interaksi: Kamu bisa membalik halaman, klik tombol, isi formulir, atau menonton video.</span>
                </li>
              </ul>

              <p className="text-slate-400 leading-relaxed">
                Nah, dalam dunia website, kita punya &quot;tiga sekawan&quot; yang bekerja sama untuk membuat semua itu:
              </p>

              <ImageBlock
                src="https://miro.medium.com/v2/resize:fit:875/1*KWZzxiw3Iv3RNGohWPDAnQ.png"
                alt="HTML Structure Illustration"
              />

            </div>
          </div>
        )
      },
      {
        label: 'HTML',
        topicLink: "https://weboctary.hashnode.space/html-guide",
        content: (
          <div className="space-y-6">
            <ImageBlock
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1752925313046/da8ff16f-f2f6-441a-acfb-66f33e22aebd.png?auto=compress,format&format=webp&q=75"
              alt="HTML Structure Illustration"
            />
            <h4 className="text-lg font-semibold text-cyan-400 mb-3">Apa itu HTML?</h4>
            <p className="text-slate-400 leading-relaxed">
              HTML (HyperText Markup Language) adalah bahasa markup standar untuk membuat halaman web.
            </p>

            <div>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Bahasa untuk struktur konten web</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Menggunakan tags untuk menandai elemen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Foundation dari setiap website</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Bekerja sama dengan CSS & JavaScript</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-3">Tag-tag Penting HTML</h4>

              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-white mb-2">Heading & Text</h5>
                  <ul className="space-y-1 text-slate-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;h1&gt;</code> sampai <code className="text-cyan-300">&lt;h6&gt;</code> - Judul (h1 terbesar, h6 terkecil)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;p&gt;</code> - Paragraf
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;strong&gt;</code> - Teks tebal (penting)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;em&gt;</code> - Teks miring (emphasis)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;br&gt;</code> - Line break
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;hr&gt;</code> - Horizontal line
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-white mb-2">Links & Media</h5>
                  <ul className="space-y-1 text-slate-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;a href=&quot;url&quot;&gt;</code> - Hyperlink
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;img src=&quot;...&quot; alt=&quot;...&quot;&gt;</code> - Gambar
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;video&gt;</code> - Video
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;audio&gt;</code> - Audio
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-white mb-2">Lists</h5>
                  <ul className="space-y-1 text-slate-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;ul&gt;</code> - Unordered list (bullet points)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;ol&gt;</code> - Ordered list (numbered)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;li&gt;</code> - List item
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-white mb-2">Containers</h5>
                  <ul className="space-y-1 text-slate-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;div&gt;</code> - Block container
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;span&gt;</code> - Inline container
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;section&gt;</code> - Section semantik
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;article&gt;</code> - Artikel konten
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;header&gt;</code> - Header section
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;footer&gt;</code> - Footer section
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;nav&gt;</code> - Navigation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;main&gt;</code> - Main content
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-white mb-2">Forms</h5>
                  <ul className="space-y-1 text-slate-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;form&gt;</code> - Form container
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;input&gt;</code> - Input field
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;button&gt;</code> - Tombol
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;textarea&gt;</code> - Text area
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;select&gt;</code> - Dropdown
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;label&gt;</code> - Label untuk input
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-white mb-2">Tables</h5>
                  <ul className="space-y-1 text-slate-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;table&gt;</code> - Table container
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;tr&gt;</code> - Table row
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;td&gt;</code> - Table data
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;th&gt;</code> - Table header
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;thead&gt;</code> - Table head section
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <code className="text-cyan-300">&lt;tbody&gt;</code> - Table body section
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-3">Struktur Dasar HTML</h4>
              <p className="text-slate-400 mb-3">
                Setiap halaman HTML memiliki struktur dasar yang terdiri dari beberapa bagian penting:
              </p>
              <CodeBlock
                language="html"
                code={`<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Judul Halaman Saya</title>
</head>
<body>
    <h1>Selamat Datang!</h1>
    <p>Ini adalah paragraf pertama saya.</p>
</body>
</html>`}
              />
            </div>
          </div>

        )
      },
      {
        label: 'CSS',
        topicLink: "https://weboctary.hashnode.space/default-guide/fundamental/css",
        content: (
          <div className="space-y-6">
            <ImageBlock
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePQicetUQSrjdPj8XQSDGwnOR7FhUpZW8Sg&s"
              alt="CSS Illustration"
            />
            <h4 className="text-lg font-semibold text-cyan-400 mb-3">Apa itu CSS?</h4>
            <p className="text-slate-400 leading-relaxed">
              Ingat analogi rumah tadi? Kalau HTML itu denah rumahnya, maka CSS adalah “tukang dekorasi interior”-nya!
            </p>

            <div>
              <ul className="space-y-2 text-slate-400 mb-4">
                <p className="text-slate-400 leading-relaxed">
                  CSS (Cascading Style Sheets) digunakan untuk mengatur tampilan (style) dari semua elemen HTML kita. Dengan CSS, kamu bisa mengubah:
                </p>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Warna teks atau latar belakang.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Ukuran dan jenis font (tulisan).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Tata letak elemen (misalnya, menengahkan teks, memberi jarak antar elemen).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Dan masih banyak lagi, supaya website-mu terlihat menarik dan profesional.</span>
                </li>
              </ul>
            </div>
          </div>
        )
      },
      {
        label: 'JavaScript',
        topicLink: "https://weboctary.hashnode.space/default-guide/fundamental/javascript",
        content: (
          <div className="space-y-6">
            <ImageBlock
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1752929715497/00870134-68ed-4da4-862e-605637beae3d.png?auto=compress,format&format=webp&q=75"
              alt="JavaScript Fundamentals"
            />
            <h4 className="text-lg font-semibold text-cyan-400 mb-3">Apa itu JavaScript?</h4>
            <p className="text-slate-400 leading-relaxed">
              Kalau HTML adalah kerangka dan CSS adalah dekorasinya, maka JavaScript adalah &quot;otak&quot; yang membuat website kita bisa &quot;hidup&quot; dan berinteraksi!
            </p>

            <div>
              <ul className="space-y-2 text-slate-400 mb-4">
                <p className="text-slate-400 leading-relaxed">
                  Dengan JavaScript, website kamu bisa:
                </p>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Merasa: Menanggapi klik tombol, gerakan mouse, atau input dari keyboard.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Berpikir: Melakukan perhitungan, memeriksa data, atau membuat keputusan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Bertindak: Mengubah tampilan halaman, menampilkan pesan pop-up, mengirim data ke server, atau membuat animasi.</span>
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-2 text-slate-400 mb-4">
                <p className="text-slate-400 leading-relaxed">
                  Contoh interaksi yang bisa dibuat dengan JavaScript:
                </p>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Tombol yang saat diklik, akan menampilkan pesan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Formulir pendaftaran yang bisa mengecek apakah email sudah benar atau belum.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Gambar-gambar yang otomatis berganti (seperti slideshow).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Permainan sederhana di dalam browser.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Efek animasi saat kamu scroll halaman.</span>
                </li>
              </ul>
            </div>
          </div>
        )
      },
      {
        label: 'Git',
        topicLink: "https://weboctary.hashnode.space/default-guide/fundamental/git-family",
        content: (
          <div className="space-y-6">
            <ImageBlock
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1753067590258/9838d93f-ee24-41a8-8b12-5b6b393eb975.png?auto=compress,format&format=webp&q=75"
              alt="Git Illustration"
            />
            <h4 className="text-lg font-semibold text-cyan-400 mb-3">Apa itu Git?</h4>
            <p className="text-slate-400 leading-relaxed">
              Setelah kita belajar tentang Supabase dan database sebagai &quot;lemari ajaib&quot; untuk menyimpan data, sekarang kita akan berkenalan dengan tiga alat super lain yang sangat penting dalam dunia pembuatan aplikasi: Git, GitHub, dan GitLab.
            </p>

            <div>
              <ul className="space-y-2 text-slate-400 mb-4">
                <p className="text-slate-400 leading-relaxed">
                  Bayangkan kalian sedang membangun sebuah istana pasir yang sangat besar dan rumit bersama teman-teman.
                </p>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Git itu seperti buku catatan ajaib yang mencatat setiap perubahan kecil yang kalian lakukan pada istana pasir itu. Siapa yang menambahkan menara? Siapa yang membuat parit? Kapan itu dilakukan? Semuanya tercatat!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>GitHub dan GitLab itu seperti papan pengumuman besar di pusat desa tempat semua tim pembangun istana pasir bisa melihat catatan perubahan, berbagi ide, dan bekerja sama dengan rapi. Keduanya adalah &quot;desa&quot; yang berbeda, tapi punya fungsi utama yang mirip: tempat kita menyimpan dan mengelola proyek Git kita secara online.</span>
                </li>
              </ul>
            </div>
          </div>
        )
      },
      {
        label: 'Github Pages',
        topicLink: "https://weboctary.hashnode.space/default-guide/fundamental/github-pages",
        content: (
          <div className="space-y-6">
            <ImageBlock
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1753600203789/87dd9a35-2c52-403a-b45f-60e3ec2cac6b.png?auto=compress,format&format=webp&q=75"
              alt="Git Page Illustration"
            />
            <h4 className="text-lg font-semibold text-cyan-400 mb-3">Apa itu Github Page</h4>
            <p className="text-slate-400 leading-relaxed">
              Hai teman-teman developer muda! Ingat buku catatan ajaib Git dan papan pengumuman raksasa GitHub? Nah, sekarang kita akan pakai kemampuan super itu untuk hal yang lebih keren lagi: membuat website portofolio online-mu sendiri!
            </p>

            <p className="text-slate-400 leading-relaxed">
              Bayangkan kamu punya koleksi gambar, cerita, atau bahkan game kecil yang sudah kamu buat. Kamu ingin semua orang bisa melihatnya dengan mudah, seperti pameran seni pribadimu di internet. Di sinilah GitHub Pages datang!
            </p>
            <p className="text-slate-400 leading-relaxed">
              GitHub Pages itu seperti kalian menyewa sebuah galeri seni gratis di pusat kota terbesar di dunia (yaitu internet!) untuk memajang semua karya terbaikmu. Semua orang bisa datang dan melihat-lihat karyamu kapan saja, di mana saja, tanpa perlu kamu undang ke rumah. Keren, kan?
            </p>

            <p className="text-slate-400 leading-relaxed">
              GitHub Pages adalah fitur super dari GitHub yang memungkinkan kita mengubah proyek yang ada di GitHub menjadi website sungguhan yang bisa diakses siapa saja di internet! Jadi, file-file HTML, CSS, dan JavaScript yang sudah kalian buat (yang ibaratnya adalah karya-karyamu dan dekorasi galerimu) bisa langsung terlihat seperti website biasa.
            </p>

            <div>
              <ul className="space-y-2 text-slate-400 mb-4">
                <p className="text-slate-400 leading-relaxed">
                  Kenapa Kita Pakai GitHub Pages untuk Portofolio?
                </p>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Gratis! 🎉 Ini seperti dapat lapak galeri gratis. Kamu tidak perlu bayar sewa bulanan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Mudah Dipakai! Kalian tidak perlu belajar banyak hal rumit untuk mengunggah website portofoliomu. GitHub sudah menyiapkan semuanya.</span>
                </li>
                <li className="flex item-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Kartu Nama Online-mu! Ini adalah cara terbaik untuk menunjukkan kemampuanmu kepada teman, guru, atau bahkan calon pembimbing di masa depan. Mereka bisa langsung melihat hasil karyamu secara langsung!</span>
                </li>
              </ul>
            </div>
          </div>
        )
      },
      {
        label: 'Web Server: Penjaga Restoran Digital yang Selalu Siaga',
        topicLink: "https://weboctary.hashnode.space/default-guide/fundamental/web-server",
        content: (
          <div className="space-y-6">
            <ImageBlock
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1753605735126/7633aafb-7334-40c7-9253-80eb2ad47d2c.png?auto=compress,format&format=webp&q=75"
              alt="Web Server Illustration"
            />
            <h4 className="text-lg font-semibold text-cyan-400 mb-3">Apa itu Web Server</h4>
            <p className="text-slate-400 leading-relaxed">
              Bayangkan Internet itu seperti sebuah kota besar yang penuh dengan berbagai restoran digital. Setiap kali kamu ingin mengunjungi sebuah &quot;restoran&quot; (yaitu, sebuah website), ada proses yang terjadi di belakang layar. Di sinilah peran Web Server sangat penting.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Secara teori, Web Server adalah sebuah program komputer yang dirancang khusus untuk menanggapi permintaan dari client (dalam kasus ini, browser web di komputer atau smartphone kamu) dan mengirimkan kembali respons.
            </p>
          </div>
        )
      },
      {
        label: 'ReactJS',
        topicLink: "https://weboctary.hashnode.space/default-guide/frontend/react",
        content: (
          <div className="space-y-6">
            <ImageBlock
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1753513748796/e12afc80-9042-472e-b8ed-ef1a5fb4e061.png?auto=compress,format&format=webp&q=75"
              alt="React Illustration"
            />
            <h4 className="text-lg font-semibold text-cyan-400 mb-3">Apa itu ReactJS?</h4>
            <p className="text-slate-400 leading-relaxed">Bayangkan kamu mau membangun mainan dari Lego. Daripada harus bikin satu balok Lego dari nol setiap kali mau pakai, kamu punya banyak balok Lego siap pakai dengan berbagai bentuk dan ukuran. Kamu tinggal susun balok-balok itu sesuai keinginanmu.</p>
            <div>
              <ul className="space-y-2 text-slate-400 mb-4">
                <p className="text-slate-400 leading-relaxed">
                  Nah, React itu mirip seperti balok Lego digital!
                </p>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Setiap komponen di React itu ibarat satu balok Lego.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Kita bisa membuat balok-balok Lego sendiri (komponen kustom) atau menggunakan balok yang sudah ada.</span>
                </li>
                <li className="flex item-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Kita bisa menyusun balok-balok Lego ini berkali-kali dan di mana saja untuk membentuk antarmuka website yang utuh.</span>
                </li>
                <li className="flex item-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Kalau ada bagian kecil dari mainan Lego kita yang rusak (misalnya, cuma satu balok yang perlu diubah warnanya), kita tidak perlu bongkar seluruh mainan, cukup ganti balok yang itu saja.</span>
                </li>
                <p className="text-slate-400 leading-relaxed">Inilah mengapa React sangat disukai: kita bisa membangun UI dengan memecahnya menjadi bagian-bagian kecil yang bisa digunakan ulang, seperti balok Lego!</p>
              </ul>
            </div>
          </div>
        )
      },
      {
        label: 'NextJS',
        topicLink: "https://weboctary.hashnode.space/default-guide/nextjs/reactjs-vs-nextjs",
        content: (
          <div className="space-y-6">
            <ImageBlock
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaWwQik2eprmTQP0G1A_jb3brzeNs2UflOuw&s"
              alt='NextJS Ilustrasi'
            />
            <h4 className="text-lg font-semibold text-cyan-400 mb-3">Apa itu NextJS?</h4>
            <p className="text-slate-400 leading-relaxed">Next.js adalah framework React. Ini seperti &quot;React yang sudah ditingkatkan.&quot; Next.js dibangun di atas React untuk mengatasi kelemahan-kelemahan React murni. Next.js menambahkan fitur-fitur penting yang membuat pengembangan website lebih mudah, seperti:</p>
            <div>
              <ul className="space-y-2 text-slate-400 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Routing berbasis file: Anda tidak perlu menulis kode tambahan untuk navigasi. Cukup buat file baru di folder pages/ (atau app/) dan Next.js akan secara otomatis membuat route untuk halaman tersebut.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Render di sisi server (Server-Side Rendering / SSR): Ini adalah fitur utama Next.js. Next.js bisa &quot;membangun&quot; halaman HTML di server sebelum mengirimkannya ke browser. Ini sangat baik untuk SEO dan membuat waktu tunggu awal website lebih cepat.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Image optimization, code splitting, dan banyak lagi.</span>
                </li>
              </ul>
            </div>
          </div>
        )
      },
      {
        label: 'TypeScript',
        topicLink: 'https://weboctary.hashnode.space/default-guide/nextjs/typescript',
        content: (
          <div className="space-y-6">
            <ImageBlock
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1755323966461/67ba8bba-d873-4da6-b441-6f4ee22d0df3.png?auto=compress,format&format=webp&q=75"
              alt="Typescript Ilustrasi"
            />

            <h4 className="text-lg font-semibold text-cyan-400 mb-3">
              Apa itu TypeScript?
            </h4>

            <p className="text-slate-400 leading-relaxed">
              TypeScript adalah JavaScript yang memiliki &quot;tipe&quot;.
            </p>

            <div>
              <p className="text-slate-400 leading-relaxed">
                Bayangkan JavaScript seperti menulis di buku catatan biasa.
                Anda bisa menulis apa saja: angka, teks, atau gambar.
                Tidak ada aturan yang ketat.
              </p>

              <p className="text-slate-400 leading-relaxed mt-4">
                TypeScript seperti menulis di formulir atau tabel.
                Setiap kolom sudah ditentukan jenisnya:
              </p>

              <ul className="space-y-2 text-slate-400 mb-4 mt-2">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Kolom &quot;Nama&quot; hanya bisa diisi teks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Kolom &quot;Usia&quot; hanya bisa diisi angka.</span>
                </li>
              </ul>

              <p className="text-slate-400 leading-relaxed">
                Jika Anda mencoba menulis angka di kolom &quot;Nama&quot;,
                formulir akan memberikan peringatan.
              </p>

              <p className="text-slate-400 leading-relaxed mt-4">
                Itulah inti dari TypeScript. Ia menambahkan aturan ketat
                (tipe data) ke JavaScript.
              </p>
            </div>
          </div>
        )
      },
      {
        label: 'TailwindCSS',
        topicLink: 'https://weboctary.hashnode.space/default-guide/nextjs/typescript',
        content: (
          <div className="space-y-6">
            <ImageBlock
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1756475824985/0e8b5639-51c0-4410-88c9-188f90549356.png?auto=compress,format&format=webp&q=75"
              alt="TailwindCSS Ilustrasi"
            />

            <h4 className="text-lg font-semibold text-cyan-400 mb-3">
              Apa itu Tailwind CSS?
            </h4>

            <p className="text-slate-400 leading-relaxed">
              Tailwind CSS adalah sebuah alat bantu untuk membuat desain website.
              Daripada Anda harus menulis semua aturan desain dari awal,
              Tailwind memberikan ribuan kelas siap pakai yang bisa langsung
              ditempelkan pada elemen HTML.
            </p>

            <div>
              <p className="text-slate-400 leading-relaxed">
                Setiap kelas melakukan satu tugas yang sangat spesifik dan sederhana, seperti:
              </p>

              <ul className="space-y-2 text-slate-400 mb-4 mt-2">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <code className="text-cyan-300">bg-blue-500</code> : Membuat latar belakang biru.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <code className="text-cyan-300">text-white</code> : Membuat teks berwarna putih.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <code className="text-cyan-300">p-4</code> : Menambah ruang kosong di sekeliling elemen.
                  </span>
                </li>
              </ul>

              <p className="text-slate-400 leading-relaxed">
                Dengan menggabungkan kelas-kelas ini, Anda bisa membangun desain
                yang unik dan sesuai keinginan tanpa perlu menulis satu baris
                kode CSS pun.
              </p>
            </div>
          </div>
        )
      },
      {
        label: 'UI Kit',
        topicLink: 'https://weboctary.hashnode.space/default-guide/nextjs/typescript',
        content: (
          <div className="space-y-6">
            <ImageBlock
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1756476358709/bc7d90ce-342e-492b-ac53-15a8892613a1.png?auto=compress,format&format=webp&q=75"
              alt="UI Kit Ilustrasi"
            />

            <h4 className="text-lg font-semibold text-cyan-400 mb-3">
              Penjelasan Seputar UI Kit
            </h4>

            <p className="text-slate-400 leading-relaxed">
              UI Kit, atau User Interface Kit, adalah kumpulan aset dan elemen desain
              yang dapat digunakan kembali untuk membangun antarmuka pengguna sebuah
              produk digital, seperti aplikasi seluler atau website.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Bayangkan UI Kit sebagai &quot;kotak peralatan&quot; yang berisi semua bahan
              baku yang Anda butuhkan mulai dari tombol, checkbox, menu, hingga
              typography dan palet warna yang sudah disiapkan sebelumnya.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Tujuannya adalah untuk memastikan desain sebuah produk digital konsisten,
              efisien, dan memiliki tampilan yang seragam.
            </p>

            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-3">
                Komponen Utama dalam UI Kit
              </h4>

              <ul className="space-y-3 text-slate-400 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <span className="font-semibold text-white">Komponen UI (UI Components)</span> :
                    Blok bangunan dasar seperti tombol, formulir input, dropdown,
                    dan slider (termasuk berbagai kondisi seperti normal, hover,
                    atau dinonaktifkan).
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <span className="font-semibold text-white">Elemen Navigasi</span> :
                    Tab bar, sidebar, breadcrumb, dan elemen lain yang membantu
                    pengguna berpindah antar halaman.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <span className="font-semibold text-white">Style Dasar</span> :
                  </span>
                </li>
              </ul>

              <ul className="space-y-2 text-slate-400 mb-4 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <span className="font-medium text-white">Palet Warna</span> :
                    Warna primer, sekunder, dan aksen yang sudah ditentukan.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <span className="font-medium text-white">Typography</span> :
                    Aturan ukuran, ketebalan, dan jarak baris untuk judul,
                    subjudul, dan isi teks.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <span className="font-medium text-white">Ikonografi</span> :
                    Kumpulan ikon yang konsisten untuk navigasi,
                    aksi, atau notifikasi.
                  </span>
                </li>
              </ul>

              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <span className="font-semibold text-white">Layout dan Grid</span> :
                    Aturan penempatan komponen dalam tata letak yang teratur dan
                    responsif, sering menggunakan sistem grid (misalnya 12-kolom).
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )
      },
      {
        label: 'Database',
        topicLink: 'https://weboctary.hashnode.space/default-guide/nextjs/typescript',
        content: (


          <div className="space-y-6">
            <ImageBlock
              src="https://s7280.pcdn.co/wp-content/uploads/2021/12/introduction-of-dbms.webp"
              alt="Database Ilustrasi"
            />

            <h4 className="text-lg font-semibold text-cyan-400 mb-3">
              Apa Itu Database?
            </h4>

            <p className="text-slate-400 leading-relaxed">
              <span className="font-semibold text-white">Database</span> adalah tempat untuk
              menyimpan dan mengatur data agar mudah dicari, diubah, dan digunakan kembali.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Bayangkan database seperti lemari arsip digital.
              Di dalamnya ada banyak laci.
              Di setiap laci ada map.
              Dan di setiap map ada dokumen yang tersusun rapi.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Bedanya, ini semua ada di komputer.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Kalau Anda punya aplikasi sekolah, misalnya, database bisa menyimpan:
            </p>

            <ul className="space-y-3 text-slate-400 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Data siswa</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Nilai</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Jadwal pelajaran</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Data guru</span>
              </li>
            </ul>

            <p className="text-slate-400 leading-relaxed">
              Tanpa database, semua data itu akan berantakan.
              Dengan database, semuanya bisa dicari hanya dalam hitungan detik.
            </p>

            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-3">
                Singkatnya
              </h4>

              <p className="text-slate-400 leading-relaxed">
                Database membuat data yang banyak terasa
                <span className="font-semibold text-white">
                  {' '}teratur, cepat diakses, dan aman.
                </span>
              </p>
            </div>

          </div>
        )
      },
      {
        label: 'Supabase',
        topicLink: 'https://weboctary.hashnode.space/default-guide/database/supabase',
        content: (
          <div className="space-y-6">
            <ImageBlock
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1753510388048/89eccee8-3f58-41bf-8183-f4a67501e53f.png?auto=compress,format&format=webp&q=75"
              alt="Supabase ilustrasi"
            />

            <h4 className="text-lg font-semibold text-cyan-400 mb-3">
              Apa Itu Supabase?
            </h4>

            <p className="text-slate-400 leading-relaxed">
              <span className="font-semibold text-white">Supabase</span> adalah platform
              open-source yang menyediakan backend-as-a-service (BaaS) lengkap untuk
              pengembangan aplikasi.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Sederhananya, Supabase seperti &quot;Firebase tapi open-source&quot;.
              Ia menawarkan berbagai fitur yang dibutuhkan developer untuk membangun
              aplikasi tanpa harus mengelola server sendiri, seperti basis data,
              autentikasi, penyimpanan file, dan fungsi serverless.
            </p>

            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-3">
                Mengapa Supabase?
              </h4>

              <ul className="space-y-3 text-slate-400 mb-4">

                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <span className="font-semibold text-white">Open Source</span> :
                    Dibangun di atas PostgreSQL, memberi kontrol dan transparansi penuh
                    terhadap sistem yang digunakan.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <span className="font-semibold text-white">Database PostgreSQL</span> :
                    Mendukung SQL sepenuhnya dan memanfaatkan kekuatan PostgreSQL.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <span className="font-semibold text-white">Realtime</span> :
                    Mendapatkan update data secara instan seperti Firebase.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <span className="font-semibold text-white">Authentication</span> :
                    Mendukung login dengan Google, GitHub, email/password, dan lainnya.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <span className="font-semibold text-white">Storage</span> :
                    Penyimpanan file aman untuk gambar, video, dan dokumen.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <span className="font-semibold text-white">Edge Functions</span> :
                    Fungsi serverless berbasis Deno untuk menjalankan logika backend.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>
                    <span className="font-semibold text-white">API Otomatis</span> :
                    Menghasilkan REST dan GraphQL API secara otomatis dari database.
                  </span>
                </li>

              </ul>
            </div>

          </div>
        )
      },

    ],
  },
  {
    title: 'Artificial Intelligence',
    subtitle: 'Membuat kecerdasan buatan yang lebih cerdas',
    topics: [
      {
        label: 'Apa itu Kecerdasan Buatan?',
        topicLink: 'https://weboctary.hashnode.space/default-guide/ai/apa-itu-kecerdasan-buatan',
        content: (
          <div className="space-y-6">
            <ImageBlock
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1757525498625/823ffa9a-b04b-4708-b67a-d4ee99a800e6.png?auto=compress,format&format=webp&q=75"
              alt='Kecerdasan Buatan Ilustrasi'
            />
  <div className="space-y-6">

    <h4 className="text-lg font-semibold text-cyan-400 mb-3">
      Pengantar Artificial Intelligence
    </h4>

    <p className="text-slate-400 leading-relaxed">
      Halo! Selamat datang di era 5.0, di mana <span className="font-semibold text-white">Artificial Intelligence </span>
      bukan lagi sekadar konsep fiksi ilmiah, melainkan mesin utama yang
      menggerakkan perubahan di sekitar kita.
    </p>

    <ImageBlock
      src="https://cdn.hashnode.com/res/hashnode/image/upload/v1757529257565/407a6ba5-3d80-4aeb-bf15-d16b758b0328.png?auto=compress,format&format=webp&q=75"
      alt="Artificial Intelligence Illustration"
    />

    <p className="text-slate-400 leading-relaxed">
      Era 5.0 merujuk pada gagasan Society 5.0, di mana manusia, data, dan
      teknologi cerdas diintegrasikan untuk menyelesaikan masalah sosial-ekonomi.
      Fokus kita adalah memahami bagaimana AI bekerja dan bagaimana
      memanfaatkannya dengan benar.
    </p>

    <p className="text-slate-400 leading-relaxed">
      Dari belanja online, rekomendasi film, hingga mobil dengan autopilot,
      AI secara fundamental membentuk ulang industri dan menciptakan peluang baru.
      Kelas ini adalah langkah pertama untuk menjadi bagian dari perubahan tersebut.
    </p>

    <div>
      <h4 className="text-lg font-semibold text-cyan-400 mb-3">
        Apa Itu AI?
      </h4>

      <p className="text-slate-400 leading-relaxed">
        Secara sederhana, AI adalah cabang ilmu komputer yang bertujuan
        menciptakan sistem yang dapat meniru kemampuan intelektual manusia
        seperti belajar, bernalar, memahami bahasa, dan mengenali objek visual.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-semibold text-cyan-400 mb-3">
        Narrow AI vs AGI
      </h4>

      <ul className="space-y-3 text-slate-400">

        <li className="flex items-start gap-2">
          <span className="text-cyan-400">•</span>
          <span>
            <span className="font-semibold text-white">Narrow AI</span> :
            Sistem yang sangat baik pada tugas spesifik (deteksi spam,
            pengenal wajah, penerjemah). Inilah yang digunakan saat ini.
          </span>
        </li>

        <li className="flex items-start gap-2">
          <span className="text-cyan-400">•</span>
          <span>
            <span className="font-semibold text-white">AGI</span> :
            Sistem hipotetis dengan kemampuan umum lintas domain setara manusia.
            Belum ada saat ini.
          </span>
        </li>

      </ul>
    </div>

    <div>
      <h4 className="text-lg font-semibold text-cyan-400 mb-3">
        Rule-Based vs Machine Learning
      </h4>

      <ul className="space-y-3 text-slate-400">

        <li className="flex items-start gap-2">
          <span className="text-cyan-400">•</span>
          <span>
            <span className="font-semibold text-white">Rule-Based</span> :
            Keputusan berdasarkan aturan IF–THEN yang ditulis manusia.
            Kuat untuk domain stabil, tetapi kurang adaptif.
          </span>
        </li>

        <li className="flex items-start gap-2">
          <span className="text-cyan-400">•</span>
          <span>
            <span className="font-semibold text-white">ML/DL</span> :
            Model belajar dari data dengan menyesuaikan parameter untuk
            meminimalkan kesalahan. Lebih adaptif tetapi bergantung pada kualitas data.
          </span>
        </li>

      </ul>
    </div>

    <div>
      <h4 className="text-lg font-semibold text-cyan-400 mb-3">
        Tiga Pilar AI
      </h4>

      <ul className="space-y-3 text-slate-400">

        <li className="flex items-start gap-2">
          <span className="text-cyan-400">•</span>
          <span><span className="font-semibold text-white">Data</span> : Volume, variasi, kualitas.</span>
        </li>

        <li className="flex items-start gap-2">
          <span className="text-cyan-400">•</span>
          <span><span className="font-semibold text-white">Algoritma</span> : Dari model klasik hingga Transformer.</span>
        </li>

        <li className="flex items-start gap-2">
          <span className="text-cyan-400">•</span>
          <span><span className="font-semibold text-white">Komputasi</span> : GPU/TPU dan software stack efisien.</span>
        </li>

      </ul>

      <p className="text-slate-400 leading-relaxed mt-3">
        Prinsip penting: <span className="font-semibold text-white">Garbage In, Garbage Out (GIGO)</span>.
        Data buruk menghasilkan model buruk.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-semibold text-cyan-400 mb-3">
        Training vs Inference
      </h4>

      <ul className="space-y-3 text-slate-400">

        <li className="flex items-start gap-2">
          <span className="text-cyan-400">•</span>
          <span>
            <span className="font-semibold text-white">Training</span> :
            Model belajar dari data dan menyesuaikan parameter.
          </span>
        </li>

        <li className="flex items-start gap-2">
          <span className="text-cyan-400">•</span>
          <span>
            <span className="font-semibold text-white">Inference</span> :
            Menggunakan model terlatih untuk prediksi cepat di dunia nyata.
          </span>
        </li>

      </ul>
    </div>

    <div>
      <h4 className="text-lg font-semibold text-cyan-400 mb-3">
        Spektrum Aplikasi AI
      </h4>

      <ul className="space-y-3 text-slate-400">

        <li className="flex items-start gap-2">
          <span className="text-cyan-400">•</span>
          <span><span className="font-semibold text-white">Generative AI</span> : Teks, gambar, audio, video.</span>
        </li>

        <li className="flex items-start gap-2">
          <span className="text-cyan-400">•</span>
          <span><span className="font-semibold text-white">Recommendation Systems</span> : Personalisasi konten.</span>
        </li>

        <li className="flex items-start gap-2">
          <span className="text-cyan-400">•</span>
          <span><span className="font-semibold text-white">Computer Vision</span> : Pengenalan objek & visual.</span>
        </li>

        <li className="flex items-start gap-2">
          <span className="text-cyan-400">•</span>
          <span><span className="font-semibold text-white">Natural Language Processing</span> : Pemahaman bahasa.</span>
        </li>

      </ul>
    </div>

    <p className="text-slate-400 leading-relaxed">
      Tujuan kita sederhana: mengubah konsep AI yang abstrak menjadi sesuatu
      yang nyata, logis, dan dapat dibangun. Kita akan belajar selangkah demi
      selangkah hingga mampu menciptakan solusi AI sendiri.
    </p>

  </div>
          </div>
        )
      }
    ],
  },
  {
    label: 'Flutter Mobile',
    topicLink: 'https://weboctary.hashnode.space/default-guide/flutter/flutter-mobile',
    topics: [
      {
        label: 'Apa itu Flutter?',
        topicLink: 'https://weboctary.hashnode.space/default-guide/flutter/apa-itu-flutter',
        content: (
          <div className="space-y-6">
            <ImageBlock
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaWwQik2eprmTQP0G1A_jb3brzeNs2UflOuw&s"
              alt='Flutter Mobile Ilustrasi'
            />
          </div>
        )
      }
    ],
  },
  {
    label: 'Database',
    topicLink: 'https://weboctary.hashnode.space/default-guide/database/apa-itu-database',
    topics: [
      {
        label: 'Apa itu Database?',
        topicLink: 'https://weboctary.hashnode.space/default-guide/database/apa-itu-database',
        content: (
          <div className="space-y-6">
            <ImageBlock
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaWwQik2eprmTQP0G1A_jb3brzeNs2UflOuw&s"
              alt='Database Ilustrasi'
            />
          </div>
        )
      }
    ],
  },
  {
    label: 'Cyber Security',
    topicLink: 'https://weboctary.hashnode.space/default-guide/cybersecurity/apa-itu-cybersecurity',
    topics: [
      {
        label: 'Apa itu Cyber Security?',
        topicLink: 'https://weboctary.hashnode.space/default-guide/cybersecurity/apa-itu-cybersecurity',
        content: (
          <div className="space-y-6">
            <ImageBlock
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaWwQik2eprmTQP0G1A_jb3brzeNs2UflOuw&s"
              alt='Cyber Security Ilustrasi'
            />
          </div>
        )
      }
    ],
  },
  {
    label: 'Game Development',
    topicLink: 'https://weboctary.hashnode.space/default-guide/gamedev/apa-itu-gamedev',
    topics: [
      {
        label: 'Apa itu Game Development?',
        topicLink: 'https://weboctary.hashnode.space/default-guide/gamedev/apa-itu-gamedev',
        content: (
          <div className="space-y-6">
            <ImageBlock
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaWwQik2eprmTQP0G1A_jb3brzeNs2UflOuw&s"
              alt='Game Development Ilustrasi'
            />
          </div>
        )
      }
    ],
  }
];
