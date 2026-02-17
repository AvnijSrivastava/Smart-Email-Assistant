package app;

import java.util.Map;
public class EmailRequest {

    private String tone;
    private String emailContent;

    public String getTone() {
        return tone;
    }

    public String getEmailContent() {
        return emailContent;
    }

    public void setTone(String tone) {
        this.tone = tone;
    }

    public void setEmailContent(String emailContent) {
        this.emailContent = emailContent;
    }
}
