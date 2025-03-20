"use client"

import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import { ExpandMore } from "@mui/icons-material"
import { faqs } from "@/data/lang_data"

export default function FAQ() {
  return (
    <Box id="faq" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" align="center" sx={{ mb: 2, fontWeight: 700 }}>
          よくある質問
        </Typography>

        <Typography
          variant="h6"
          component="p"
          align="center"
          color="text.secondary"
          sx={{ mb: 8, maxWidth: "700px", mx: "auto" }}
        >
          ご不明な点がございましたら、お気軽にお問い合わせください
        </Typography>

        <Box sx={{ mt: 4 }}>
          {faqs.map((faq, index) => (
            <Accordion key={index} sx={{ mb: 2, boxShadow: 1, borderRadius: "8px !important", overflow: "hidden" }}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

