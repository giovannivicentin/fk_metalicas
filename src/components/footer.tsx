function Footer() {
  return (
    <div className="bg-brand-blue">
      <div className="flex justify-around">
        <div>
          <p>Localização</p>
          <iframe
            className=""
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d58662.35204887777!2d-46.90351576286571!3d-23.228636081394153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x94cf2070efc55c2f%3A0xd394910ba4d351c4!2sfrank%20metalicas%20google%20maps!3m2!1d-23.2453967!2d-46.83136!5e0!3m2!1spt-BR!2sbr!4v1708642809397!5m2!1spt-BR!2sbr"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <p>Contate-nos</p>
          <form action="" method="post"></form>
        </div>
      </div>
      <div>
        <p>Siga-nos nas redes</p>
        <div></div>
        <p className="text-muted-foreground">Diretos reservados...</p>
      </div>
    </div>
  )
}

export default Footer
