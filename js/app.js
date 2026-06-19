/* ============================================================
   Paratha House — interactions (Tailwind build)
   ============================================================ */
(function () {
  "use strict";

  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  $("#year").textContent = new Date().getFullYear();

  /* ---------- sticky nav: glass + flip text from light→dark ---------- */
  var nav = $("#nav");
  var navName = $("[data-navname]", nav);
  var navLinks = $$("[data-navlinks] a");
  function onScroll() {
    var stuck = window.scrollY > 40;
    nav.classList.toggle("bg-cream/85", stuck);
    nav.classList.toggle("backdrop-blur-xl", stuck);
    nav.classList.toggle("shadow-soft", stuck);
    nav.classList.toggle("py-2.5", stuck);
    // text colour: white over hero, ink when stuck
    navName.classList.toggle("text-white", !stuck);
    navLinks.forEach(function (a) { a.classList.toggle("text-white", !stuck); });
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- hero parallax ---------- */
  var parallax = $("[data-parallax]");
  if (parallax && !reduce) {
    window.addEventListener("scroll", function () {
      var y = window.scrollY;
      if (y < window.innerHeight) parallax.style.transform = "translateY(" + y * 0.25 + "px)";
    }, { passive: true });
  }

  /* ---------- magnetic buttons ---------- */
  if (!reduce && window.matchMedia("(pointer:fine)").matches) {
    $$(".btn-magnetic").forEach(function (btn) {
      btn.addEventListener("mousemove", function (e) {
        var r = btn.getBoundingClientRect();
        var mx = e.clientX - r.left - r.width / 2;
        var my = e.clientY - r.top - r.height / 2;
        btn.style.transform = "translate(" + mx * 0.25 + "px," + my * 0.35 + "px)";
      });
      btn.addEventListener("mouseleave", function () { btn.style.transform = ""; });
    });
  }

  /* ---------- helpers ---------- */
  function spicy(n) {
    if (!n) return "Mild";
    return "🌶️".repeat(n) + " " + (n === 1 ? "Lightly spiced" : n === 2 ? "Medium spice" : "Hot");
  }

  /* ---------- signature cards ---------- */
  var featured = [];
  MENU.forEach(function (cat) {
    cat.items.forEach(function (it) {
      if (it.tags.indexOf("Bestseller") > -1 || it.tags.indexOf("Chef's Pick") > -1) featured.push(it);
    });
  });
  featured = featured.slice(0, 6);

  var grid = $("#signature-grid");
  featured.forEach(function (it) {
    var card = document.createElement("article");
    card.className = "dish";
    card.setAttribute("data-reveal", "");
    card.innerHTML =
      (it.tags[0] ? '<span class="dish__tag">' + it.tags[0] + "</span>" : "") +
      '<div class="dish__img" style="background-image:url(' + it.img + ')"></div>' +
      '<div class="dish__shade"></div>' +
      '<div class="dish__shine"></div>' +
      '<div class="dish__body">' +
        '<h3 class="dish__name">' + it.name + "</h3>" +
        '<div class="dish__row">' +
          '<span class="dish__price">₹' + it.price + "</span>" +
          '<span class="dish__more">View dish →</span>' +
        "</div>" +
      "</div>";
    card.addEventListener("click", function () { openItem(it); });
    addTilt(card);
    grid.appendChild(card);
  });

  /* ---------- 3D tilt on dish cards ---------- */
  function addTilt(card) {
    if (reduce || !window.matchMedia("(pointer:fine)").matches) return;
    card.addEventListener("mousemove", function (e) {
      var r = card.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5;
      var py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = "perspective(900px) rotateX(" + (-py * 7) + "deg) rotateY(" + (px * 9) + "deg) translateY(-6px)";
    });
    card.addEventListener("mouseleave", function () { card.style.transform = ""; });
  }

  /* ============================================================
     MENU DRAWER
     ============================================================ */
  var menu = $("#menu");
  var menuBackdrop = $("[data-menu-backdrop]");
  var menuPanel = $("[data-menu-panel]");
  var tabs = $("#menu-tabs");
  var body = $("#menu-body");
  var built = false;

  function slug(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, "-"); }

  function buildMenu() {
    if (built) return;
    MENU.forEach(function (cat, i) {
      var tab = document.createElement("button");
      tab.className = "menu-tab" + (i === 0 ? " is-active" : "");
      tab.textContent = cat.category;
      tab.dataset.target = slug(cat.category);
      tab.addEventListener("click", function () {
        $$(".menu-tab", tabs).forEach(function (t) { t.classList.remove("is-active"); });
        tab.classList.add("is-active");
        var el = $("#g-" + slug(cat.category));
        if (el) body.scrollTo({ top: el.offsetTop - body.offsetTop - 8, behavior: "smooth" });
      });
      tabs.appendChild(tab);

      var group = document.createElement("section");
      group.className = "menu-group";
      group.id = "g-" + slug(cat.category);
      group.innerHTML =
        '<div class="mb-4">' +
          '<h3 class="font-serif text-[1.55rem] font-medium">' + cat.category + "</h3>" +
          (cat.note ? '<p class="text-[.85rem] text-inksoft">' + cat.note + "</p>" : "") +
        "</div>";

      cat.items.forEach(function (it) {
        var row = document.createElement("div");
        row.className = "menu-row";
        row.innerHTML =
          '<div class="menu-thumb" style="background-image:url(' + it.img + ')"></div>' +
          '<div class="flex-1 min-w-0">' +
            '<div class="flex items-baseline justify-between gap-4">' +
              '<span class="font-serif text-[1.18rem] font-medium flex items-center gap-2">' +
                (it.veg ? '<span class="veg-dot" title="Veg"></span>' : "") + it.name +
                (it.tags[0] ? ' <span class="mini-tag">' + it.tags[0] + "</span>" : "") +
              "</span>" +
              '<span class="font-bold text-terracotta whitespace-nowrap">₹' + it.price + "</span>" +
            "</div>" +
            '<p class="text-[.88rem] text-inksoft mt-0.5 line-clamp-2">' + it.desc + "</p>" +
          "</div>";
        row.addEventListener("click", function () { openItem(it); });
        group.appendChild(row);
      });
      body.appendChild(group);
    });

    body.addEventListener("scroll", function () {
      var pos = body.scrollTop + 60;
      var groups = $$(".menu-group", body);
      var current = groups[0];
      groups.forEach(function (g) { if (g.offsetTop - body.offsetTop <= pos) current = g; });
      if (current) {
        var id = current.id.replace("g-", "");
        $$(".menu-tab", tabs).forEach(function (t) { t.classList.toggle("is-active", t.dataset.target === id); });
      }
    }, { passive: true });

    built = true;
  }

  function openMenu() {
    buildMenu();
    menu.classList.add("pointer-events-auto");
    menu.setAttribute("aria-hidden", "false");
    menuBackdrop.classList.remove("opacity-0");
    menuPanel.classList.remove("translate-x-full");
    document.body.classList.add("lock");
  }
  function closeMenu() {
    menu.classList.remove("pointer-events-auto");
    menu.setAttribute("aria-hidden", "true");
    menuBackdrop.classList.add("opacity-0");
    menuPanel.classList.add("translate-x-full");
    if (item.getAttribute("aria-hidden") === "true") document.body.classList.remove("lock");
  }

  $$("[data-open-menu]").forEach(function (b) { b.addEventListener("click", openMenu); });
  $$("[data-close-menu]").forEach(function (b) { b.addEventListener("click", closeMenu); });
  menuBackdrop.addEventListener("click", closeMenu);

  /* ============================================================
     ITEM MODAL
     ============================================================ */
  var item = $("#item");
  var itemBackdrop = $("[data-item-backdrop]");
  var itemCard = $("[data-item-card]");

  function openItem(it) {
    $("#item-img").style.backgroundImage = "url(" + it.img + ")";
    $("#item-name").textContent = it.name;
    $("#item-price").textContent = "₹" + it.price;
    $("#item-desc").textContent = it.desc;

    var tagWrap = $("#item-tags");
    tagWrap.innerHTML = "";
    it.tags.forEach(function (t) {
      var s = document.createElement("span");
      s.className = "mini-tag"; s.textContent = t; tagWrap.appendChild(s);
    });

    $("#item-meta").innerHTML =
      '<span class="pill">' + (it.veg ? "🟢 Pure Veg" : "Non-veg") + "</span>" +
      '<span class="pill">' + spicy(it.spicy) + "</span>";

    item.classList.add("pointer-events-auto");
    item.setAttribute("aria-hidden", "false");
    itemBackdrop.classList.remove("opacity-0");
    itemCard.classList.remove("opacity-0", "scale-90", "translate-y-5");
    document.body.classList.add("lock");
  }
  function closeItem() {
    item.classList.remove("pointer-events-auto");
    item.setAttribute("aria-hidden", "true");
    itemBackdrop.classList.add("opacity-0");
    itemCard.classList.add("opacity-0", "scale-90", "translate-y-5");
    if (menu.getAttribute("aria-hidden") === "true") document.body.classList.remove("lock");
  }

  $$("[data-close-item]").forEach(function (b) { b.addEventListener("click", closeItem); });
  itemBackdrop.addEventListener("click", closeItem);

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (item.getAttribute("aria-hidden") === "false") closeItem();
    else if (menu.getAttribute("aria-hidden") === "false") closeMenu();
  });

  /* ---------- order placeholders ---------- */
  $$("[data-order]").forEach(function (b) {
    b.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Add your Swiggy / Zomato ordering link here (in index.html).");
    });
  });

  /* ============================================================
     SCROLL REVEAL — staggered
     ============================================================ */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var el = en.target;
      var delay = el.getAttribute("data-rise-d") || 0;
      // stagger siblings within a reveal group
      setTimeout(function () { el.classList.add("in"); }, +delay);
      io.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

  $$("[data-reveal], [data-rise]").forEach(function (el, i) {
    if (!el.hasAttribute("data-rise-d") && el.hasAttribute("data-reveal")) {
      el.setAttribute("data-rise-d", (i % 6) * 60);
    }
    io.observe(el);
  });
})();
