document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.news-toggle').forEach(function(toggle) {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        
        var targetId = this.getAttribute('data-bs-target');
        var target = document.querySelector(targetId);
        var icon = this.querySelector('.news-icon');
        
        if (target.classList.contains('show')) {
          // Collapse
          target.classList.remove('show');
          target.style.display = 'none';
          icon.style.transform = 'rotate(0deg)';
          this.setAttribute('aria-expanded', 'false');
        } else {
          // Expand
          target.classList.add('show');
          target.style.display = 'block';
          icon.style.transform = 'rotate(180deg)';
          this.setAttribute('aria-expanded', 'true');
        }
      });
    });
  });